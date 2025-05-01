const BOOKS_DATA = [
  {
    id: 'whiteship',
    title: 'The White Ship',
    author: 'Chyngyz Aitmatov',
    description: 'A poignant tale about a young boy\'s connection to nature and Kyrgyz mythology, exploring themes of tradition and modernity.',
    rating: 4.8,
    cover: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Stamps_of_Kyrgyzstan%2C_2009-582.jpg',
    pdf: 'pdfs/whiteship.pdf'
  },
  {
    id: 'firstteacher',
    title: 'The First Teacher',
    author: 'Chyngyz Aitmatov',
    description: 'Set in a remote Kyrgyz village, this novel tells the story of a young teacher\'s struggle to bring education to a traditional community.',
    rating: 4.6,
    cover: 'https://m.media-amazon.com/images/I/91vzSJ1tTmL._UF1000,1000_QL80_.jpg',
    pdf: 'pdfs/first-teacher.pdf'
  },
  {
    id: 'motherearth',
    title: 'Mother Earth',
    author: 'Chyngyz Aitmatov',
    description: 'A powerful narrative about the relationship between humans and nature, set against the backdrop of Kyrgyz steppes.',
    rating: 4.7,
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1540254707i/366917.jpg',
    pdf: 'pdfs/themotherearth.pdf'
  },
  {
    id: 'tales',
    title: 'Tales of the Mountains',
    author: 'Kasymaly Bayalinov',
    description: 'A collection of short stories celebrating the rich cultural heritage and natural beauty of Kyrgyzstan.',
    rating: 4.5,
    cover: 'https://theeleventhage.com/wp-content/uploads/2015/02/isaandnoel.jpg',
    pdf: 'pdfs/tales.pdf'
  },
  {
    id: 'manas',
    title: 'Epic of Manas',
    author: 'Traditional',
    description: 'The legendary epic poem of the Kyrgyz people, telling the story of the hero Manas and his descendants.',
    rating: 4.9,
    cover: 'https://ich.unesco.org/img/photo/thumb/08364-BIG.jpg',
    pdf: 'pdfs/Manas_The_Kyrgyz_Epic.pdf'
  },
  {
    id: 'poetry',
    title: 'Modern Kyrgyz Poetry',
    author: 'Various Authors',
    description: 'A contemporary collection of poems by modern Kyrgyz poets, exploring themes of identity, nature, and change.',
    rating: 4.4,
    cover: 'https://24.kg/files/media/197/197415.jpg',
    pdf: 'pdfs/Modern Kyrgyz Poetry.pdf'
  },
  {
    id: 'thedaylastsmorethanahundredyears',
    title: 'The Day Lasts More Than a Hundred Years',
    author: 'Chyngyz Aitmatov',
    description: "A powerful tale of tradition and change in the Kazakh steppes, following a railway worker's final journey.",
    rating: 4.5,
    cover: 'https://upload.wikimedia.org/wikipedia/en/3/37/ChingizAitmatov_TheDayLastsMoreThanAHundredYears.jpg',
    pdf: 'pdfs/oneday.pdf'
  },
  {
    id: 'jamila',
    title: 'Jamila',
    author: 'Chyngyz Aitmatov',
    description: 'A moving love story set in rural Kyrgyzstan during World War II, exploring personal freedom and tradition.',
    rating: 4.7,
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1354902617i/604208.jpg',
    pdf: 'pdfs/jamila.pdf'
  },
  {
    id: 'dune',
    title: 'Dune',
    author: 'Frank Herbert',
    description: 'An epic sci-fi masterpiece following Paul Atreides\' journey on the desert planet Arrakis.',
    rating: 4.8,
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg',
    pdf: 'pdfs/dune.pdf'
  },
  {
    id: 'fahrenheit451',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    description: 'A dystopian tale of a future where books are banned and firemen burn any that are found.',
    rating: 4.3,
    cover: 'https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg',
    pdf: 'pdfs/f.pdf'
  },
  {
    id: 'theevolutionofmodernkyrgyzliterature',
    title: 'The Evolution of Modern Kyrgyz Literature',
    author: 'Dr. Ainura Asanbekova',
    description: 'An exploration of how Kyrgyz literature has evolved in the post-Soviet era, examining themes of identity and tradition.',
    rating: 4.0,
    cover: 'https://picsum.photos/seed/article1/300/450',
    pdf: 'pdfs/modernkyrgyzlit.pdf'
  },
  {
    id: 'understandingtheepicofmanasinmoderncontext',
    title: 'Understanding the Epic of Manas in Modern Context',
    author: 'Prof. Bakyt Kenenbaev',
    description: 'A contemporary analysis of the Epic of Manas and its relevance to modern Kyrgyz society and culture.',
    rating: 4.2,
    cover: 'https://picsum.photos/seed/article2/300/450',
    pdf: 'pdfs/epicmanas.pdf'
  },
  {
    id: 'digitallibrariespreservingkyrgyzheritage',
    title: 'Digital Libraries: Preserving Kyrgyz Heritage',
    author: 'Ermek Turgunbaev',
    description: 'How digital libraries are helping preserve and share Kyrgyz literary heritage with future generations.',
    rating: 4.1,
    cover: 'https://picsum.photos/seed/article3/300/450',
    pdf: 'pdfs/digitallibraries.pdf'
  },
  {
    id: 'womenwritersshapingmodernkyrgyzliterature',
    title: 'Women Writers Shaping Modern Kyrgyz Literature',
    author: 'Dr. Jyldyz Ormonova',
    description: 'Exploring the contributions and impact of female authors in contemporary Kyrgyz literature.',
    rating: 4.3,
    cover: 'https://picsum.photos/seed/article4/300/450',
    pdf: 'pdfs/womenwriters.pdf'
  }
];

// Optional helper for retrieval
function getBookById(id) {
  return BOOKS_DATA.find(b => b.id === id);
}

if (typeof window !== 'undefined') {
  window.BOOKS_DATA = BOOKS_DATA;
  window.getBookById = getBookById;
  window.slugify = str=>str.toLowerCase().replace(/[^a-z0-9]+/g,'');
} 