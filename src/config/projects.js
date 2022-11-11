export default [
   {
    video:"imgs/codex_demo.mp4",
    isSplashLight:false,
    splashImage:"/imgs/codex_splash.png",
    name:"Codex",
    description:"Codex is a coding tool for beginner programmer who are trying to learn HTML/CSS/JS. The main feature of the app show the most relevent tutorials with a personal code editor so the user can type and learn on the same page. The video and code editor are also saved into tabs so the user can search other tutorials and code but still access their old code and tutorial, the app also will show events near the user that are relevent the what code is searched, and finally the app has plenty of quizzes the user can access to test their knowledge. If you are a beginner coder this app will be the perfect guide in your learning",
    published:"2019",
    embed:"https://marcoking13.github.io/codex_remake_",
    type:"Coding Tool",
    languages: "JS, HTML/CSS",
    link:"",
    platform:"Windows",
    workflow:[
      {
        heading:"App Concept",
        components:[
          {
            heading:"Shows User Tutorials Based on Their Searches",
            icon:"codex_search.svg",
            description:"User can search any coding term and the app will present the most relevent videos for the user, the user will also get a editor with each tutorial so they can code along and easily go back to the editor that matches the video  "
          },
          {
            heading:"User will See Nearby Events Based On Search",
            icon:"codex_input.svg",
            description:"The app will save a sidebar filled with all the events near the user's zipcode and also save the sidebar so the user can access it without searching, it will also save the sidebar so it will appear when the user goes back to an old term"
          }
        ]
      },
      {
        heading:"Coding Solutions",
        components:[
          {
            heading:"API Calling",
            icon:"codex_api.svg",
            description:"This app heavily relied on API searches and uses promises to save the response and use it without having so many nested calls, since this project was focused on using JQuery and Javascript I did not want to use async and await so I used AJAX and returned results to make the code look cleaner "
          },
          {
            heading:"Setting Active Content",
            icon:"codex_active.svg",
            description:"Having to remove content then recalling the API to recreate the content everytime a user searched a different item seemed very impractical so I tried to figure out how to hide the content without deleting it and just showing the active content that the user searched. ",
          },
          {
            heading:"Using For Loops to Generate a Quiz",
            icon:"codex_loop.svg",
            description:"I had to utilize many forms of iteration functions such as while and for to efficiently generate questions and choices from my quiz configure file and then iterating through the DOM to get the data of the user's choices and compare it to the answer key",

          }

        ]
      },
      {
        heading:"What I Learned",
        components:[
          {
            heading:"How to Make Cleaner Code",
            icon:"codex_clean.svg",
            description:"A bigger project like this with many small intricate functionality forced me to really focus on making the most reusable and readable code so I would not get stuck and confused as the project got big"
          },
          {
            heading:"Throttling API",
            icon:"codex_throttle.svg",
            description:"It is easy to keep calling API's over and not think of the consequences for small projects but seeing how slow my app was and the fact that I kept exceeding my limit for the quota of the API made me rethink how to efficiently call APIs",
          },
          {
            heading:"Looping",
            icon:"codex_loop_2.svg",
            description:"It was challenging to learn how to use looping function but not overely on them and break my app by looping too much",

          }



        ]
      }
    ]
  },
   {
    video:"imgs/gem_cart_demo.mp4",
    published:"2022",
    splashImage:"/imgs/gem_splash.png",
    isSplashLight:false,
    name:"Gem Cart",
    embed:"https://itch.io/embed-upload/5849892?color=00050C&autoplay=0",
    description:"You are a mine cart and must dash and jump your way through the mine cave collecting gems and avoiding dangerous enemies at the same time, can you make it out of the mine?",
    type:"Side Scroller",
    languages:"Unity, C#",
    link:"",
    platform:"Windows",
    workflow:[
      {
        heading:"App Concept",
        components:[
          {
            heading:"Side Scroller Game",
            icon:"gem_side.svg",
            description:"Avoid enemies and collect gems for as long as you can!"
          },
          {
            heading:"Gain Access to Power Ups!",
            icon:"gem_power.svg",
            description:"Use power ups you get in the game like the double jump power up or give your cart a boost with the dash power up!"
          }
        ]
      },
      {
        heading:"Coding Solutions",
        components:[
          {
            heading:"Cart Movement",
            icon:"gem_movement.svg",
            description:"Get the arrow keys of user to determine what the cart should do.\n If the user is on the ground allow him to jump"
          },
          {
            heading:"Enemy Waves",
            icon:"gem_enemy.svg",
            description:"Use scriptable objects to construct the wave and customize the enemies and time of spawn between enemies then loop through the array \n and use IEnumerator feature in Unity to time the spawns",
          },
          {
            heading:"Gems",
            icon:"gem_gem.svg",
            description:"Make spawner object and then use a manually created timer in C# that will spawn a gem when reached to 0 and make the timer reset when a gem is created. \n Collecting a gem will increase the user score",

          }

        ]
      },
      {
        heading:"What I Learned",
        components:[
          {
            heading:"Animation and Making Special Effects",
            icon:"gem_animation.svg",
            description:"Get the arrow keys of user to determine what the cart should do.\n If the user is on the ground allow him to jump"
          },
          {
            heading:"Pathing and Spawning",
            icon:"gem_spawn.svg",
            description:"Use scriptable objects to construct the wave and customize the enemies and time of spawn between enemies then loop through the array \n and use IEnumerator feature in Unity to time the spawns",
          },
          {
            heading:"Project Management",
            icon:"gem_project.svg",
            description:"Make spawner object and then use a manually created timer in C# that will spawn a gem when reached to 0 and make the timer reset when a gem is created. \n Collecting a gem will increase the user score",

          },
          {
            heading:"Player Input",
            icon:"gem_input.svg",
            description:"Make spawner object and then use a manually created timer in C# that will spawn a gem when reached to 0 and make the timer reset when a gem is created. \n Collecting a gem will increase the user score",

          }


        ]
      }
    ]
  },
  {
    video:"imgs/star_slash_demo.mp4",
    published:"2021",
    isSplashLight:false,
    splashImage:"/imgs/star_splash.png",
    embed:"https://itch.io/embed-upload/1757738?color=00050C&autoplay=0",
    name:"Star Slash",
    description:"Star Slash is a similar game to fruit ninja. The player will have a star slicer and will try to slice as many stars as possible before they hit a meteor or miss too many stars ",
    type:"Fruit Ninja Game",
    languages:"Unity, C#",
    link:"",
    platform:"Windows",
    workflow:[
      {
        heading:"App Concept",
        components:[
          {
            heading:"Fruit Ninja Variation",
            icon:"star_fruit.svg",
            description:"Slice the stars for points but avoid the meteors or you die! See how many stars you can slash and master the galaxies!"
          },
          {
            heading:"Difficulty Progression",
            icon:"star_difficulty.svg",
            description:"The longer the player lasts the shorter times the stars and meteors will spawn and the amount of them will increase. The player will have to be more tactical and purposful with their slashes but also be quick enough to not let any stars fall!"
          }
        ]
      },
      {
        heading:"Coding Solutions",
        components:[
          {
            heading:"Using Mouse Position as Slicer",
            icon:"star_slice.svg",
            description:"I created a slicer object that will follow the mouse position and the player must have the slicer meets two collisions in center of the star to destroy it"
          },
          {
            heading:"Meteors",
            icon:"star_meteor.svg",
            description:"Meteors will spawn sporatically and will end the game and change the scene if the user collides with them",
          },
          {
            heading:"Lives",
            icon:"star_lives.svg",
            description:"Player will have up to three lives and will lose one if the user misses a star and will lose all of them if they hit a meteor",

          }

        ]
      },
      {
        heading:"What I Learned",
        components:[
          {
            heading:"Adding Difficulty",
            icon:"star_ai.svg",
            description:"I figured how track the time and score of the user and use it to change parameters of the spawn to add difficulty "
          },
          {
            heading:"Using Trail and Particle Effects",
            icon:"star_particles.svg",
            description:"I learned how to make cool particles and trails for the trails of the slicer and meteors and the destruction of stars as well",
          },
          {
            heading:"Slicing",
            icon:"star_slice_2.svg",
            description:"I learned how to make multiple collision points and using the mouse to imitate a slicing feel",

          }


        ]
      }
    ]

  },
   {
    video:"imgs/music_bender_demo.mp4",
    published:"2020",
    isSplashLight:false,
    splashImage:"/imgs/divine_splash.png",
    embed:"",
    name:"Music Bender",
    description:"Music Bender is an extension of the Spotify app! The app comes with many features of Spotify such as sharing playlists, playing the radio and searching countless artists and songs! Music Bender will also allow you to get playlists from people all over the world and also be able to interact with users that have Music Bender as well! Listen to music on the next level now!",
    type:"Spotify-App",
    languages:"MERN, JS, HTML/CSS",
    link:"",
    platform:"Windows",
    workflow:[
      {
        heading:"App Concept",
        components:[
          {
            heading:"Spotify Features",
            icon:"music_spotify.svg",
            description:"This app will function very similar to spotify will play the newest songs on the app, and will also allow the user to make custom playlists and share them with friends! All the user has to do is enter their own spotify credentials and this app will be available! Music Bender is a project that has taken me out of my comfort zone and motivated me to learn OAuth and also utilize other features of React such as refs. I hope this apps showcases how far I have come since graduating the bootcamp and will allow me to have other oppertunities in mastering React "
          },
        ]
      },
      {
        heading:"Coding Solutions",
        components:[
          {
            heading:"Google and Spotify OAuth",
            icon:"music_google.svg",
            description:"Use google and spotify oauth to get the user's credentials and then send the user to the main page and then the app will be able to access the spotify's API"
          },
          {
            heading:"Using Refs to Stop and Start Radio",
            icon:"music_ref.svg",
            description:"I used the spotify API to get the relevent music clips that the user needs and then use React refs to manipulate the audio element such as pausing and restarting it",
          },
          {
            heading:"Sharing Playlists with Other Users",
            icon:"music_playlists.svg",
            description:"When a user adds a playlist to their account then presses share it will add it to a large database of all the playlists other users have shared then they will be rendered in the shared playlist page",

          },
          {
            heading:"Search Artists and Songs",
            icon:"music_radio.svg",
            description:"Used the input and form values to call the songs and artists relevent to the user and display them on a page",

          }


        ]
      },
      {
        heading:"What I Learned",
        components:[
          {
            heading:"Spotify Oauth20",
            icon:"music_auth_2.svg",
            description:"I learned how to use Spotify's OAuth to save the user's account info into a database and then be able to make requests on behalf of their account"
          },
          {
            heading:"Using Refs for Audio",
            icon:"music_auth.svg",
            description:"I learned how to use React's ref system to efficiently render and manipulate the properties of the audio element, the ref system is a very useful feature of React that I use all the time now",
          },
          {
            heading:"Manipulating Databases",
            icon:"music_data.svg",
            description:"I took a deeper dive into Mongodb to learn how to update user's playlist and then successfully query the right accounts and properties on a larger scale then I did before",

          },
          {
            heading:"How to Make a Interactive App",
            icon:"music_interact.svg",
            description:"I learned how to push other user's data to my own server and database and then display them to my app so everyone can see them and interact with other user's playlists and content",

          }


        ]
      }
    ]
  },
   {
    video:"imgs/ez_eatz_demo.mp4",
    published:"2020",
    splashImage:"/imgs/ez-eatz-splash.png",
    isSplashLight:false,
    embed:"",
    name:"EZ Eatz",
    description:"EZ-Eatz is an app that will allow users to see nearby foodtrucks and then also be able to order from them and pick up their food, save your self the inconvience of trying to track down foodtrucks and waiting in line and instead track and order right from your phone!",
    type:"Foodtruck Finder",
    languages:"MERN, JS, HTML/CSS",
    link:"",
    platform:"Windows",
    workflow:[
      {
        heading:"App Concept",
        components:[
          {
            heading:"Track Foodtrucks",
            icon:"ez_foodtruck.svg",
            description:"This app will allow the user to see foodtrucks nearby them and also be able to access and order from their menu right from the map. All the user needs to do is type in their address or zip and it will locate all the foodtrucks nearby the user!"
          },
          {
            heading:"Order from Foodtruck",
            icon:"ez_order.svg",
            description:"Be able to see all the nearby foodtrucks' menu and b order from you phone and then simply go and pick up your order from the foodtruck when it is ready!"

          }
        ]
      },
      {
        heading:"Coding Solutions",
        components:[
          {
            heading:"Geocoding and Reverse Geocoding",
            icon:"ez_geo.svg",
            description:"App will turn the location of the user into coordinates and then compare all the foodtrucks coordinates and display the nearest foodtrucks to the user"
          },
          {
            heading:"Google Maps",
            icon:"ez_maps.svg",
            description:"App will get the coords of all the foodtrucks in the app and them plot them on the google maps page displaying the foodtruck's name, cuisine, and price range",
          },
          {
            heading:"Adding Foodtrucks",
            icon:"ez_add.svg",
            description:"App uses several mongodb databases to keep track of users and the foodtrucks owners as well, an owner as can easily their menu and foodtruck info to the app for users to see on the page! ",

          }

        ]
      },
      {
        heading:"What I Learned",
        components:[
          {
            heading:"Managing Databases",
            icon:"ez_data.svg",
            description:"I learned how to manage several databases with Mongodb and got comfortable with updating complex databases and then displaying them to the user based on certain criteria like distance"
          },
          {
            heading:"Google Maps",
            icon:"ez_maps_2.svg",
            description:"I learned how to add and manipulate the google maps api such as adding markers to the map itself showing the user and all the foodtrucks near the user, I was also able to make the markers take the user to the foodtruck's menu so they can order right away! ",
          },
          {
            heading:"Google OAuth20",
            icon:"ez_auth.svg",
            description:"I was able to give the user the option of using google to log in by learning how the Google OAuth20 works and then save the user's info into a database so they do not have to keep logging in",

          }



        ]
      }
    ]
  },
      {
       video:"imgs/pita_jungle.mp4",
       published:"2022",
       isSplashLight:true,
       splashImage:"/imgs/pita_splash.png",
       embed:"http://maskoffsales.myshopify.com",
       name:"Pita Jungle Shop",
       description:"EZ-Eatz is an app that will allow users to see nearby foodtrucks and then also be able to order from them and pick up their food, save your self the inconvience of trying to track down foodtrucks and waiting in line and instead track and order right from your phone!",
       type:"Online Store",
       languages:"Shopify, HTML, CSS",
       link:"https://maskoffsales.myshopify.com/",
       platform:"Windows",
       workflow:[
         {
           heading:"App Concept",
           components:[
             {
               heading:"Track Foodtrucks",
               icon:"ez_foodtruck.svg",
               description:"This app will allow the user to see foodtrucks nearby them and also be able to access and order from their menu right from the map. All the user needs to do is type in their address or zip and it will locate all the foodtrucks nearby the user!"
             },
             {
               heading:"Order from Foodtruck",
               icon:"ez_order.svg",
               description:"Be able to see all the nearby foodtrucks' menu and b order from you phone and then simply go and pick up your order from the foodtruck when it is ready!"

             }
           ]
         },
         {
           heading:"Coding Solutions",
           components:[
             {
               heading:"Geocoding and Reverse Geocoding",
               icon:"ez_geo.svg",
               description:"App will turn the location of the user into coordinates and then compare all the foodtrucks coordinates and display the nearest foodtrucks to the user"
             },
             {
               heading:"Google Maps",
               icon:"ez_maps.svg",
               description:"App will get the coords of all the foodtrucks in the app and them plot them on the google maps page displaying the foodtruck's name, cuisine, and price range",
             },
             {
               heading:"Adding Foodtrucks",
               icon:"ez_add.svg",
               description:"App uses several mongodb databases to keep track of users and the foodtrucks owners as well, an owner as can easily their menu and foodtruck info to the app for users to see on the page! ",

             }

           ]
         },
         {
           heading:"What I Learned",
           components:[
             {
               heading:"Managing Databases",
               icon:"ez_data.svg",
               description:"I learned how to manage several databases with Mongodb and got comfortable with updating complex databases and then displaying them to the user based on certain criteria like distance"
             },
             {
               heading:"Google Maps",
               icon:"ez_maps_2.svg",
               description:"I learned how to add and manipulate the google maps api such as adding markers to the map itself showing the user and all the foodtrucks near the user, I was also able to make the markers take the user to the foodtruck's menu so they can order right away! ",
             },
             {
               heading:"Google OAuth20",
               icon:"ez_auth.svg",
               description:"I was able to give the user the option of using google to log in by learning how the Google OAuth20 works and then save the user's info into a database so they do not have to keep logging in",

             }



           ]
         }
    ]
  }
]
