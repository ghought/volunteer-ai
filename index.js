const platforms = [
  {
    logo: 'https://kandouapp.s3-us-west-1.amazonaws.com/volunteer-ai/volunteermatch.jpg',
    name: 'Volunteer Match',
    website: 'https://www.volunteermatch.org/'
  },
  {
    logo: 'https://kandouapp.s3-us-west-1.amazonaws.com/volunteer-ai/kandou.jpg',
    name: 'Kandou',
    website: 'https://www.kandouapp.com/'
  },
  {
    logo: 'https://kandouapp.s3-us-west-1.amazonaws.com/volunteer-ai/ovio.png',
    name: 'Ovio',
    website: 'https://oviohub.com/'
  },
  {
    logo: 'https://kandouapp.s3-us-west-1.amazonaws.com/volunteer-ai/handson.png',
    name: 'HandsOn Bay Area',
    website: 'https://www.handsonbayarea.org/'
  },
  {
    logo: 'https://kandouapp.s3-us-west-1.amazonaws.com/volunteer-ai/givz.jpeg',
    name: 'Givz',
    website: 'https://givz.com/'
  },
  {
    logo: 'https://kandouapp.s3-us-west-1.amazonaws.com/volunteer-ai/raisedbyus.png',
    name: 'RaisedBy.Us',
    website: 'https://www.raisedby.us/'
  },
  {
    logo: 'https://kandouapp.s3-us-west-1.amazonaws.com/volunteer-ai/donateyourtab.png',
    name: 'Donate Your Tab',
    website: 'https://donateyourtab.to/'
  },
  {
    logo: 'https://kandouapp.s3-us-west-1.amazonaws.com/volunteer-ai/alma.png',
    name: 'Alma',
    website: 'https://alma.app/'
  },
  {
    logo: 'https://kandouapp.s3-us-west-1.amazonaws.com/volunteer-ai/taproot.png',
    name: 'Taproot',
    website: 'https://taprootfoundation.org/'
  },
  {
    logo: 'https://kandouapp.s3-us-west-1.amazonaws.com/volunteer-ai/bemyeyes.jpg',
    name: 'Be My Eyes',
    website: 'https://www.bemyeyes.com/'
  },
    {
    logo: 'https://kandouapp.s3-us-west-1.amazonaws.com/volunteer-ai/golden.png',
    name: 'Golden',
    website: 'https://www.goldenvolunteer.com/'
  },
  {
    logo: 'https://kandouapp.s3-us-west-1.amazonaws.com/volunteer-ai/deed.jpg',
    name: 'Deed',
    website: 'https://www.thedeed.app/'
  }
]

platforms.forEach(displayPlatformCard)

function displayPlatformCard(platform, index) {
  var p = document.createElement("p");
  var node = document.createTextNode(platform.name);
  p.className = "platform-card-title";
  p.appendChild(node);
  
  var img = document.createElement("img");
  img.src = platform.logo;
  img.className = "platform-card-logo";
  
  var li = document.createElement("li");
  li.className = "platform-card";
  li.appendChild(img);
  li.appendChild(p);
  
  var a = document.createElement("a");
  a.href = platform.website;
  a.target = "_blank";
  a.className = "platform-card-link";
  a.appendChild(li);
  
  var ul = document.createElement("ul");
  ul.appendChild(a);

  document.getElementById('platforms').appendChild(ul);
}