// Get the NFT collection elements on the page
function getCollections() {
  return Array.from(document.querySelectorAll('[data-testid="CollectionCardWrapper"]'));
}

// Highlight 20% of the collections with a yellow marker
function highlightCollections() {
  const collections = getCollections();
  const numCollections = collections.length;
  const numHighlighted = Math.floor(numCollections * 0.2);

  // Generate random indices to highlight
  const highlightedIndices = new Set();
  while (highlightedIndices.size < numHighlighted) {
    highlightedIndices.add(Math.floor(Math.random() * numCollections));
  }

  // Apply the yellow marker to the randomly selected collections
  collections.forEach((collection, index) => {
    if (highlightedIndices.has(index)) {
      collection.style.backgroundColor = 'yellow';
    }
  });
}

// Wait for the page to load before highlighting collections
window.addEventListener('load', highlightCollections);
