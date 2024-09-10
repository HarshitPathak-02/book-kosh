const bookData = [
  {
    title: "The Whispering Woods",
    description: "A mystical tale of adventure set in an enchanted forest.",
    author: "Lydia Harper",
    price: 17.99,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "UPSC",
  },
  {
    title: "Tech Titans",
    description: "An in-depth look at the innovators behind major tech companies.",
    author: "Mark Robinson",
    price: 24.50,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "UPSC"
  },
  {
    title: "The Last Bookshop",
    description: "A heartwarming story about a small bookstore and its impact on the community.",
    author: "Clara Mitchell",
    price: 19.95,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "UPSC"
  },
  {
    title: "Baking Essentials",
    description: "A guide to mastering the art of baking with simple recipes.",
    author: "Emma Collins",
    price: 15.99,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "UPSC"
  },
  {
    title: "Quantum Dreams",
    description: "A science fiction novel exploring parallel universes and alternate realities.",
    author: "Adrian Knight",
    price: 21.00,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "UPSC"
  },
  {
    title: "Art of the Renaissance",
    description: "An exploration of the key artists and masterpieces of the Renaissance.",
    author: "Robert Gray",
    price: 29.95,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "UPSC"
  },
  {
    title: "Lost in the Desert",
    description: "A gripping survival story of a trek through a vast desert.",
    author: "Olivia Scott",
    price: 18.50,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "UPSC"
  },
  {
    title: "Secrets of the Mind",
    description: "Techniques for understanding and unlocking the power of your mind.",
    author: "Dr. Jane Foster",
    price: 16.99,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 11 Arts"
  },
  {
    title: "Journey to the Stars",
    description: "A sci-fi adventure about a voyage to distant galaxies.",
    author: "Neil Carter",
    price: 22.00,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 11 Arts"
  },
  {
    title: "The Mystery of the Ancient Tomb",
    description: "An archaeological thriller uncovering ancient secrets.",
    author: "Karen Wells",
    price: 20.00,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 11 Arts"
  },
  {
    title: "Yoga for Beginners",
    description: "A guide to starting and maintaining a yoga practice.",
    author: "Angela Lee",
    price: 14.99,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 11 Science"
  },
  {
    title: "The Chef's Table",
    description: "A collection of gourmet recipes from top chefs around the world.",
    author: "Julia Roberts",
    price: 27.50,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 11 Science"
  },
  {
    title: "The Time Traveler's Diary",
    description: "A historical fiction novel involving time travel and historical events.",
    author: "Thomas Green",
    price: 19.75,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 11 Science"
  },
  {
    title: "Under the Sea",
    description: "An underwater adventure exploring oceanic mysteries.",
    author: "Lisa Brown",
    price: 16.50,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 11 Commerce"
  },
  {
    title: "The Innovators",
    description: "Stories of groundbreaking inventors and their inventions.",
    author: "James White",
    price: 23.00,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 12 Science"
  },
  {
    title: "Poetry of the Seasons",
    description: "A collection of poems celebrating the beauty of each season.",
    author: "William Turner",
    price: 12.50,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 12 Science"
  },
  {
    title: "The Modern Gardener",
    description: "Tips and techniques for contemporary gardening practices.",
    author: "Emily Johnson",
    price: 18.75,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 12 Science"
  },
  {
    title: "Epic Fantasy Worlds",
    description: "A guide to the most iconic fantasy worlds in literature.",
    author: "Alice Green",
    price: 25.00,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 12 Science"
  },
  {
    title: "Historical Mysteries",
    description: "A collection of historical mysteries and unsolved cases.",
    author: "Richard Adams",
    price: 21.50,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 12 Commerce"
  },
  {
    title: "The Art of War",
    description: "Sun Tzu's classic work on strategy and warfare.",
    author: "Sun Tzu",
    price: 14.99,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 12 Commerce"
  },
  {
    title: "Tech for Tomorrow",
    description: "Predictions and trends in future technology.",
    author: "Laura Mitchell",
    price: 22.99,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 12 Commerce"
  },
  {
    title: "Meditation Mastery",
    description: "Techniques and practices for achieving a meditative state.",
    author: "Robert King",
    price: 16.00,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 12 Arts"
  },
  {
    title: "The Lost City",
    description: "An adventure novel about an expedition to find a forgotten city.",
    author: "John Carter",
    price: 19.25,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 12 Arts"
  },
  {
    title: "Coding for Kids",
    description: "A fun and interactive guide to learning programming.",
    author: "Sarah Lewis",
    price: 14.75,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 12 Arts"
  },
  {
    title: "Mystery of the Pharaohs",
    description: "An ancient Egypt-themed mystery novel.",
    author: "Michael Scott",
    price: 23.75,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 11 Commerce"
  },
  {
    title: "Gardening for Urban Spaces",
    description: "Tips for creating beautiful gardens in city environments.",
    author: "Levis Devin",
    price: 17.00,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 11 Arts"
  },
  {
    title: "The Secret Garden",
    description: "A classic novel about a magical and healing garden.",
    author: "Frances Hodgson Burnett",
    price: 12.50,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "UPSC"
  },
  {
    title: "The Science of Happiness",
    description: "An exploration of the psychological and scientific aspects of happiness.",
    author: "Dr. Alex Turner",
    price: 19.99,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "UPSC"
  },
  {
    title: "Fantasy Realms",
    description: "An anthology of fantasy short stories from various authors.",
    author: "Multiple Authors",
    price: 20.50,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "UPSC"
  },
  {
    title: "The Essential Guide to Wines",
    description: "A comprehensive guide to selecting and tasting wines.",
    author: "Sophie Davis",
    price: 27.00,
    coverimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    indeximage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    insideimage: "https://emmasbibliotreasures.com/wp-content/uploads/2023/04/20230405_145554_0000.png?w=1024",
    category: "Class 11 Science"
  },
]

module.exports = {data: bookData}