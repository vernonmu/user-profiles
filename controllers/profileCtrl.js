var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];



module.exports = {
  profiles: function (req, res, next) {
    console.log(req.session.currentUser);
    var newArr = [];

    for (var i = 0; i < req.session.currentUser.friends.length; i++) {
      for (var j = 0; j < profiles.length; j++) {

        if (req.session.currentUser.friends[i] == profiles[j].name) {
          console.log("Bingo")
          newArr.push(profiles[j])

        }
      }
    }

    res.status(200).json(req.session.currentUser)
  }
};
