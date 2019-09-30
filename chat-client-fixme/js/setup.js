// This will attach your set your credentials as headers for all requests sent.
$.ajaxPrefilter((settings, _, jqXHR) => {
  jqXHR.setRequestHeader('X-Parse-Application-Id', '5ec0221ee8b439a1fc8fdfd6a638b3e6af1cb1b4');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'bbfaf2b05152043f1b8207ba13c600d4bf296795');
});

//-------------- BEGIN VARIABLE/FUNCTION DECLARATIONS ---------------------

const SERVER_URL = 'http://parse.shared.hackreactor.com/chatterbox/classes/messages';

const userSelectedGroup = {};
let newestDate = new Date();
let userSelected;

// This one calls the Parse server to grab data, and sends it to processData
const getData = () => {
  $.ajax(`${SERVER_URL}?order=-createdAt`, {
    contentType: 'application/json',
    success: (data) => {
      processData(data);
    },
    error: (data) => {
      $('#error').prepend(' oh no').append('!');
    },
  });
};

// Here we sort the server messages by 'Created at' and send them to displayData
const processData = (data) => {
  const sortedData = data.results.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);

    if (aDate > bDate) {
      return -1;
    } else if (aDate === bDate) {
      return 0;
    } else {
      return 1;
    }
  });
  displayData({ results: sortedData }, userSelected);
};

const checkNewData = (data) => {
  const compDate = newestDate;
  const newDate = new Date(data.results[0].createdAt);
  return newDate > compDate;
};

const displayData = (data, user) => {
  const $results = [];
  let resultCount = 0;
  let i = 0;

  while(resultCount < 10 && i < data.results.length) {
    newestDate = new Date(data.results[0].createdAt);
    const currentMessage = data.results[i];

    if (user === currentMessage.username || !user) {
      const timestamp = moment(data.results[i].createdAt).format('h:mm:ss a');
      const $result = $('<li></li>').attr('data-username', currentMessage.username);
      const $message = $('<p></p>').text(currentMessage.text);
      const $userName = $('<a></a>').text(currentMessage.username).addClass('onlyUser');
      const $likeUser = $('<a></a>').addClass('addUser').text(': ');
      const $timeStamp = $('<span></span>').text(timestamp);

      if (userSelectedGroup[currentMessage.username]) {
        $message.addClass('highlight');
      }

      $result.html([$userName, $timeStamp, $likeUser, $message]);
      $results.push($result);
      resultCount++;
    }
    i++;
  }

  $('#main').find('ul').html($results);

  $('.onlyUser').on('click', function() {
    if (userSelected !== $(this).closest('li').data('username')) {
      userSelected = $(this).closest('li').data('username');
      $('#backButton').toggle();
      if (!userSelected) {
        $('.title').text('Chat with JSON');
      } else {
        $('.title').text(userSelected);
      }
      getData();
    }
  });

  $('.addUser').on('click', function() {
    if (userSelectedGroup[$(this).closest('li').data('username')]) {
      delete userSelectedGroup[$(this).closest('li').data('username')];
    } else {
      userSelectedGroup[$(this).closest('li').data('username')] = true;
    }
    getData();
  });
};

const postData = (message, username) => { // this is the function responsible for sending msgs
  $.ajax({
    url: SERVER_URL,
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({
      username: username,
      text: message,
    }),
    success: (data) => {
      getData(); //console.log('Success!', data);
    },
    error: (data) => {
      console.log(data);
    },
  });
};

window.getData = getData;
window.processData = processData;
window.checkNewData = checkNewData;
window.displayData = displayData;
window.postData = postData;
