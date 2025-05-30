const websiteData = {
  header: {
    logo: "domain.com",
    navigation: [
      { text: "Burrow", url: "./" },
      { text: "Carrot News", url: "carrot-news.html" },
      { text: "Hollow Talk", url: "hollow-talk.html" },
      { text: "Bunny Rules", url: "bunny-rules.html" },
      { text: "How to Play", url: "./#how-to-hop" },
    ],
  },
  footer: {
    links: [
      { text: "Cookies Policy", url: "cookie-policy.html" },
      { text: "Privacy Policy", url: "privacy-policy.html" },
    ],
    contact: {
      address: "290 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
      phone: "+1 (647) 555-2301",
      email: "info@domain.com",
    },
    copyright: `© ${new Date().getFullYear()} Domain.com | All rights reserved.`,
  },
  home: {
    burrowEntrance: {
      title: "Welcome to Cano Bunny's Adventure!",
      subtitle: "The Most Addictive Carrot-Collecting Adventure",
      description:
        "Hop into an exciting world of endless fun and carrot-collecting challenges. Guide your bunny through magical obstacles and discover hidden treasures!",
      features: [
        "Multiple exciting levels",
        "Unique power-ups",
        "Daily challenges",
        "Global leaderboard",
      ],
      stats: [
        { number: "1M+", label: "Players" },
        { number: "100+", label: "Levels" },
        { number: "4.8", label: "Rating" },
        { number: "50K+", label: "Reviews" },
      ],
      backgroundImage: "images/img-1.png",
      actionButton: {
        text: "Play Now",
        url: "#burrow-play",
      },
    },
    carrotReview: {
      title: "What Players Say",
      subtitle: "Join Thousands of Happy Hoppers",
      description:
        "Our community loves Cano Bunny! Here's what they have to say about their hopping adventures.",
      reviews: [
        {
          text: "The most addictive game I've played this year! Can't stop hopping!",
          author: "CarrotMaster99",
          rating: 5,
          avatar: "images/img-2.png",
          date: "March 15, 2024",
        },
        {
          text: "Beautiful graphics and smooth gameplay. A must-try!",
          author: "BunnyHopper23",
          rating: 5,
          avatar: "images/img-3.png",
          date: "March 12, 2024",
        },
        {
          text: "Perfect for quick gaming sessions. So much fun!",
          author: "JumpKing2024",
          rating: 4,
          avatar: "images/img-4.png",
          date: "March 10, 2024",
        },
      ],
      highlights: [
        { icon: "🏆", text: "Top Rated Game 2024" },
        { icon: "⭐", text: "Editor's Choice" },
        { icon: "🥕", text: "Best Casual Game" },
      ],
    },
    howToHop: {
      title: "How to Play",
      subtitle: "Master the Art of Hopping",
      description:
        "Getting started is easy! Follow these simple steps to become a carrot-collecting champion.",
      steps: [
        {
          title: "Start Your Journey",
          description:
            "Click 'Play' to begin your adventure in the magical garden.",
          icon: "🎮",
          tips: [
            "Create your bunny profile",
            "Choose your starting level",
            "Watch the tutorial",
          ],
        },
        {
          title: "Control Your Bunny",
          description:
            "Use arrow keys or WASD to move your bunny around obstacles.",
          icon: "⌨️",
          tips: [
            "Press SPACE to jump",
            "Hold SHIFT to sprint",
            "Double-tap for special moves",
          ],
        },
        {
          title: "Collect Carrots",
          description:
            "Gather carrots to earn points and unlock special abilities.",
          icon: "🥕",
          tips: [
            "Golden carrots are worth more",
            "Chain collections for combos",
            "Look for hidden carrot stashes",
          ],
        },
        {
          title: "Avoid Obstacles",
          description:
            "Watch out for tricky obstacles that might slow you down!",
          icon: "⚡",
          tips: [
            "Learn obstacle patterns",
            "Time your jumps carefully",
            "Use power-ups wisely",
          ],
        },
      ],
      videoTutorial: {
        thumbnail: "images/img-5.png",
        url: "#tutorial-video",
      },
    },
    bunnyGear: {
      title: "Power-Ups & Abilities",
      subtitle: "Enhance Your Hopping Powers",
      description:
        "Discover amazing power-ups and special abilities to boost your gameplay!",
      categories: [
        {
          name: "Movement Boosters",
          icon: "🚀",
          items: [
            {
              name: "Super Hop",
              description: "Jump twice as high for a limited time",
              duration: "30 seconds",
              cooldown: "60 seconds",
              image: "images/img-6.png",
            },
            {
              name: "Speed Boost",
              description: "Run faster than ever before",
              duration: "20 seconds",
              cooldown: "45 seconds",
              image: "images/img-7.png",
            },
          ],
        },
        {
          name: "Special Powers",
          icon: "✨",
          items: [
            {
              name: "Carrot Magnet",
              description: "Automatically attract nearby carrots",
              duration: "15 seconds",
              cooldown: "40 seconds",
              image: "images/img-8.png",
            },
            {
              name: "Shield Guard",
              description: "Temporary invincibility against obstacles",
              duration: "10 seconds",
              cooldown: "50 seconds",
              image: "images/img-1.png",
            },
          ],
        },
      ],
      unlockInfo: {
        title: "How to Unlock",
        methods: [
          "Complete daily challenges",
          "Reach level milestones",
          "Find special treasure chests",
          "Win community events",
        ],
      },
    },
    bunnyTrails: {
      title: "Tips & Tricks",
      subtitle: "Secret Techniques for Pro Hoppers",
      description:
        "Level up your game with these expert strategies and hidden mechanics!",
      categories: [
        {
          title: "Basic Techniques",
          tips: [
            {
              title: "Master the Double Jump",
              description:
                "Time your jumps perfectly to reach higher platforms",
              difficulty: "Easy",
              image: "images/img-2.png",
            },
            {
              title: "Combo Moves",
              description: "Chain multiple carrots for bonus points",
              difficulty: "Medium",
              image: "images/img-3.png",
            },
            {
              title: "Secret Paths",
              description: "Look for hidden shortcuts in each level",
              difficulty: "Hard",
              image: "images/img-4.png",
            },
          ],
        },
        {
          title: "Advanced Strategies",
          tips: [
            {
              title: "Speed Running",
              description: "Optimize your route for fastest completion",
              difficulty: "Expert",
              image: "images/img-5.png",
            },
            {
              title: "Power-Up Combos",
              description: "Combine different power-ups for maximum effect",
              difficulty: "Expert",
              image: "images/img-6.png",
            },
          ],
        },
      ],
      funFacts: [
        {
          title: "Did You Know?",
          facts: [
            "The fastest level completion was 12.3 seconds",
            "Players have collected over 1 billion carrots",
            "The longest combo streak is 157 carrots",
          ],
        },
      ],
    },
  },
  news: {
    latestUpdates: {
      title: "Latest Game Updates",
      subtitle: "Fresh from the Carrot Patch",
      description:
        "Stay up to date with the newest features and improvements in Cano Bunny!",
      articles: [
        {
          title: "Summer Festival Update",
          date: "2024-03-15",
          category: "Update",
          badge: "New",
          image: "images/img-7.png",
          content:
            "Get ready for the biggest update yet! The Summer Festival brings new levels, special power-ups, and exclusive summer-themed costumes.",
          features: [
            "10 new beach-themed levels",
            "Special watermelon power-up",
            "Summer bunny costumes",
            "Beach party decorations",
          ],
        },
        {
          title: "Weekly Challenge: Golden Carrot Hunt",
          date: "2024-03-10",
          category: "Event",
          badge: "Active",
          image: "images/img-8.png",
          content:
            "Join our special weekly challenge! Find all golden carrots to win exclusive rewards and climb the leaderboard.",
          rewards: [
            "Exclusive golden bunny skin",
            "Special badge for profile",
            "2000 bonus carrots",
            "Limited edition emotes",
          ],
        },
        {
          title: "Performance Improvements",
          date: "2024-03-05",
          category: "Technical",
          image: "images/img-1.png",
          content:
            "We've made several improvements to make your hopping experience even smoother!",
          improvements: [
            "Faster loading times",
            "Smoother animations",
            "Better mobile performance",
            "Bug fixes",
          ],
        },
      ],
    },
    communitySpotlight: {
      title: "Community Spotlight",
      subtitle: "Celebrating Our Amazing Players",
      description:
        "Check out the latest achievements and stories from our wonderful community!",
      highlights: [
        {
          title: "Player of the Month",
          player: "CarrotMaster99",
          avatar: "images/img-2.png",
          achievement: "First to complete all 100 levels!",
          stats: {
            carrots: "50,000+",
            levels: "100/100",
            badges: "25",
          },
          quote:
            "The key is to never give up and always aim for those golden carrots!",
        },
        {
          title: "Community Event Winners",
          type: "Team Challenge",
          image: "images/img-3.png",
          teams: [
            {
              name: "Carrot Crushers",
              position: "1st Place",
              score: "125,000 points",
            },
            {
              name: "Hoppy Heroes",
              position: "2nd Place",
              score: "120,000 points",
            },
            {
              name: "Bunny Brigade",
              position: "3rd Place",
              score: "115,000 points",
            },
          ],
        },
        {
          title: "Creative Corner",
          description: "Check out these amazing fan arts and creations!",
          submissions: [
            {
              artist: "BunnyArtist",
              title: "Cano's Adventure",
              image: "images/img-4.png",
              likes: 1500,
            },
            {
              artist: "CarrotDrawer",
              title: "Sunset Hop",
              image: "images/img-5.png",
              likes: 1200,
            },
          ],
        },
      ],
    },
  },
  contact: {
    title: "Hollow Talk",
    description: "Have questions or feedback? We'd love to hear from you!",
    formFields: [
      { label: "Name", type: "text", required: true },
      { label: "Email", type: "email", required: true },
      { label: "Subject", type: "text", required: true },
      { label: "Message", type: "textarea", required: true },
    ],
  },
  rules: {
    title: "Bunny Rules",
    sections: [
      {
        title: "Game Rules",
        content:
          "Play fair and have fun! Cheating or exploiting bugs is not allowed.",
      },
      {
        title: "Community Guidelines",
        content:
          "Be respectful to other players and maintain a friendly environment.",
      },
      {
        title: "Technical Requirements",
        content:
          "Minimum system requirements and supported browsers information.",
      },
    ],
  },
};
