const bookData = [
  {
    title: "The Whispering Woods",
    description: "A mystical tale of adventure set in an enchanted forest.",
    author: "Lydia Harper",
    price: 17.99,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "UPSC",
    condition: "3 Years Old",
  },
  {
    title: "Tech Titans",
    description:
      "An in-depth look at the innovators behind major tech companies.",
    author: "Mark Robinson",
    price: 24.5,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "UPSC",
    condition: "3 Years Old",
  },
  {
    title: "The Last Bookshop",
    description:
      "A heartwarming story about a small bookstore and its impact on the community.",
    author: "Clara Mitchell",
    price: 19.95,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "UPSC",
    condition: "3 Years Old",
  },
  {
    title: "Baking Essentials",
    description: "A guide to mastering the art of baking with simple recipes.",
    author: "Emma Collins",
    price: 15.99,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "UPSC",
    condition: "3 Years Old",
  },
  {
    title: "Quantum Dreams",
    description:
      "A science fiction novel exploring parallel universes and alternate realities.",
    author: "Adrian Knight",
    price: 21.0,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "UPSC",
    condition: "3 Years Old",
  },
  {
    title: "Art of the Renaissance",
    description:
      "An exploration of the key artists and masterpieces of the Renaissance.",
    author: "Robert Gray",
    price: 29.95,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "UPSC",
    condition: "3 Years Old",
  },
  {
    title: "Lost in the Desert",
    description: "A gripping survival story of a trek through a vast desert.",
    author: "Olivia Scott",
    price: 18.5,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "UPSC",
    condition: "3 Years Old",
  },
  {
    title: "Secrets of the Mind",
    description:
      "Techniques for understanding and unlocking the power of your mind.",
    author: "Dr. Jane Foster",
    price: 16.99,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 11th",
    condition: "3 Years Old",
  },
  {
    title: "Journey to the Stars",
    description: "A sci-fi adventure about a voyage to distant galaxies.",
    author: "Neil Carter",
    price: 22.0,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 11th",
    condition: "3 Years Old",
  },
  {
    title: "The Mystery of the Ancient Tomb",
    description: "An archaeological thriller uncovering ancient secrets.",
    author: "Karen Wells",
    price: 20.0,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 11th",
    condition: "3 Years Old",
  },
  {
    title: "Yoga for Beginners",
    description: "A guide to starting and maintaining a yoga practice.",
    author: "Angela Lee",
    price: 14.99,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 11th",
    condition: "3 Years Old",
  },
  {
    title: "The Chef's Table",
    description:
      "A collection of gourmet recipes from top chefs around the world.",
    author: "Julia Roberts",
    price: 27.5,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 11th",
    condition: "3 Years Old",
  },
  {
    title: "The Time Traveler's Diary",
    description:
      "A historical fiction novel involving time travel and historical events.",
    author: "Thomas Green",
    price: 19.75,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 11th",
    condition: "3 Years Old",
  },
  {
    title: "Under the Sea",
    description: "An underwater adventure exploring oceanic mysteries.",
    author: "Lisa Brown",
    price: 16.5,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 11th",
    condition: "3 Years Old",
  },
  {
    title: "The Innovators",
    description: "Stories of groundbreaking inventors and their inventions.",
    author: "James White",
    price: 23.0,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 12th",
    condition: "3 Years Old",
  },
  {
    title: "Poetry of the Seasons",
    description: "A collection of poems celebrating the beauty of each season.",
    author: "William Turner",
    price: 12.5,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 12th",
    condition: "3 Years Old",
  },
  {
    title: "The Modern Gardener",
    description: "Tips and techniques for contemporary gardening practices.",
    author: "Emily Johnson",
    price: 18.75,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 12th",
    condition: "3 Years Old",
  },
  {
    title: "Epic Fantasy Worlds",
    description: "A guide to the most iconic fantasy worlds in literature.",
    author: "Alice Green",
    price: 25.0,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage: {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage: {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 12th",
    condition: "3 Years Old",
  },
  {
    title: "Historical Mysteries",
    description: "A collection of historical mysteries and unsolved cases.",
    author: "Richard Adams",
    price: 21.5,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage:
    {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage:
    {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 12th",
    condition: "3 Years Old",
  },
  {
    title: "The Art of War",
    description: "Sun Tzu's classic work on strategy and warfare.",
    author: "Sun Tzu",
    price: 14.99,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage:
    {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage:
    {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 12th",
    condition: "3 Years Old",
  },
  {
    title: "Tech for Tomorrow",
    description: "Predictions and trends in future technology.",
    author: "Laura Mitchell",
    price: 22.99,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage:
    {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage:
    {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 12th",
    condition: "3 Years Old",
  },
  {
    title: "Meditation Mastery",
    description: "Techniques and practices for achieving a meditative state.",
    author: "Robert King",
    price: 16.0,
    coverimage: {
      filename: "bookcoverimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    indeximage:
    {
      filename: "bookindeximage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    insideimage:
    {
      filename: "bookinsideimage",
      url: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    },
    category: "Class 12th",
    condition: "3 Years Old",
  },
];

module.exports = { data: bookData };

// const bookData = [
//   {
//     title: "The Silent Patient",
//     author: "Alex Michaelides",
//     image: "https://picsum.photos/seed/silentpatient/200/300",
//   },
//   {
//     title: "Atomic Habits",
//     author: "James Clear",
//     image: "https://picsum.photos/seed/atomichabits/200/300",
//   },
//   {
//     title: "Educated",
//     author: "Tara Westover",
//     image: "https://picsum.photos/seed/educated/200/300",
//   },
//   {
//     title: "Where the Crawdads Sing",
//     author: "Delia Owens",
//     image: "https://picsum.photos/seed/crawdads/200/300",
//   },
//   {
//     title: "Becoming",
//     author: "Michelle Obama",
//     image: "https://picsum.photos/seed/becoming/200/300",
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     image: "https://picsum.photos/seed/alchemist/200/300",
//   },
//   {
//     title: "The Subtle Art of Not Giving a F*ck",
//     author: "Mark Manson",
//     image: "https://picsum.photos/seed/subtleart/200/300",
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     image: "https://picsum.photos/seed/1984/200/300",
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     image: "https://picsum.photos/seed/mockingbird/200/300",
//   },
//   {
//     title: "Sapiens",
//     author: "Yuval Noah Harari",
//     image: "https://picsum.photos/seed/sapiens/200/300",
//   },
//   {
//     title: "The Power of Habit",
//     author: "Charles Duhigg",
//     image: "https://picsum.photos/seed/powerhabit/200/300",
//   },
//   {
//     title: "Rich Dad Poor Dad",
//     author: "Robert T. Kiyosaki",
//     image: "https://picsum.photos/seed/richdad/200/300",
//   },
//   {
//     title: "The Book Thief",
//     author: "Markus Zusak",
//     image: "https://picsum.photos/seed/bookthief/200/300",
//   },
//   {

//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     image: "https://picsum.photos/seed/gatsby/200/300",
//   },
//   {

//     title: "Thinking, Fast and Slow",
//     author: "Daniel Kahneman",
//     image: "https://picsum.photos/seed/thinkingfast/200/300",
//   },
//   {

//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     image: "https://picsum.photos/seed/catcher/200/300",
//   },
//   {

//     title: "Dune",
//     author: "Frank Herbert",
//     image: "https://picsum.photos/seed/dune/200/300",
//   },
//   {

//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     image: "https://picsum.photos/seed/hobbit/200/300",
//   },
//   {

//     title: "Fahrenheit 451",
//     author: "Ray Bradbury",
//     image: "https://picsum.photos/seed/fahrenheit/200/300",
//   },
//   {

//     title: "The Road",
//     author: "Cormac McCarthy",
//     image: "https://picsum.photos/seed/road/200/300",
//   },
//   {

//     title: "The Midnight Library",
//     author: "Matt Haig",
//     image: "https://picsum.photos/seed/midnightlibrary/200/300",
//   },
//   {

//     title: "The Four Agreements",
//     author: "Don Miguel Ruiz",
//     image: "https://picsum.photos/seed/fouragreements/200/300",
//   },
//   {

//     title: "The 5 AM Club",
//     author: "Robin Sharma",
//     image: "https://picsum.photos/seed/5amclub/200/300",
//   },
//   {

//     title: "Ikigai",
//     author: "Francesc Miralles",
//     image: "https://picsum.photos/seed/ikigai/200/300",
//   },
//   {

//     title: "Deep Work",
//     author: "Cal Newport",
//     image: "https://picsum.photos/seed/deepwork/200/300",
//   },
//   {

//     title: "Can’t Hurt Me",
//     author: "David Goggins",
//     image: "https://picsum.photos/seed/canthurtme/200/300",
//   },
//   {
//     title: "Man’s Search for Meaning",
//     author: "Viktor E. Frankl",
//     image: "https://picsum.photos/seed/searchmeaning/200/300",
//   },
//   {
//     title: "Outliers",
//     author: "Malcolm Gladwell",
//     image: "https://picsum.photos/seed/outliers/200/300",
//   },
//   {
//     title: "Start With Why",
//     author: "Simon Sinek",
//     image: "https://picsum.photos/seed/startwhy/200/300",
//   },
//   {
//     title: "Drive",
//     author: "Daniel H. Pink",
//     image: "https://picsum.photos/seed/drive/200/300",
//   },
//   {
//     title: "The Lean Startup",
//     author: "Eric Ries",
//     image: "https://picsum.photos/seed/leanstartup/200/300",
//   },
//   {
//     title: "Zero to One",
//     author: "Peter Thiel",
//     image: "https://picsum.photos/seed/zerotoone/200/300",
//   },
//   {
//     title: "Hooked",
//     author: "Nir Eyal",
//     image: "https://picsum.photos/seed/hooked/200/300",
//   },
//   {
//     title: "Crushing It!",
//     author: "Gary Vaynerchuk",
//     image: "https://picsum.photos/seed/crushingit/200/300",
//   },
//   {
//     title: "Tools of Titans",
//     author: "Tim Ferriss",
//     image: "https://picsum.photos/seed/titans/200/300",
//   },
//   {
//     title: "The Psychology of Money",
//     author: "Morgan Housel",
//     image: "https://picsum.photos/seed/money/200/300",
//   },
//   {
//     title: "The Intelligent Investor",
//     author: "Benjamin Graham",
//     image: "https://picsum.photos/seed/investor/200/300",
//   },
//   {
//     title: "Principles",
//     author: "Ray Dalio",
//     image: "https://picsum.photos/seed/principles/200/300",
//   },
//   {
//     title: "No Rules Rules",
//     author: "Reed Hastings",
//     image: "https://picsum.photos/seed/norules/200/300",
//   },
//   {
//     title: "Good to Great",
//     author: "Jim Collins",
//     image: "https://picsum.photos/seed/goodtogreat/200/300",
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     image: "https://picsum.photos/seed/stevejobs/200/300",
//   },
//   {
//     title: "Elon Musk",
//     author: "Ashlee Vance",
//     image: "https://picsum.photos/seed/elonmusk/200/300",
//   },
//   {
//     title: "The Everything Store",
//     author: "Brad Stone",
//     image: "https://picsum.photos/seed/everythingstore/200/300",
//   },
//   {
//     title: "Rework",
//     author: "Jason Fried",
//     image: "https://picsum.photos/seed/rework/200/300",
//   },
//   {
//     title: "Purple Cow",
//     author: "Seth Godin",
//     image: "https://picsum.photos/seed/purplecow/200/300",
//   },
//   {
//     title: "Made to Stick",
//     author: "Chip Heath",
//     image: "https://picsum.photos/seed/madetostick/200/300",
//   },
//   {
//     title: "Contagious",
//     author: "Jonah Berger",
//     image: "https://picsum.photos/seed/contagious/200/300",
//   },
//   {
//     title: "The Tipping Point",
//     author: "Malcolm Gladwell",
//     image: "https://picsum.photos/seed/tippingpoint/200/300",
//   },
//   {
//     title: "Quiet",
//     author: "Susan Cain",
//     image: "https://picsum.photos/seed/quiet/200/300",
//   },
//   {
//     title: "Grit",
//     author: "Angela Duckworth",
//     image: "https://picsum.photos/seed/grit/200/300",
//   },
// ];

// module.exports = { data: bookData };
