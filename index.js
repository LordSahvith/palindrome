// add `reverse` to all strings
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}


// exercise 7.3
String.prototype.blank = function blank() {
    let blank;
    if (this.match(/^[\s+\n+]/)) {
        blank = true;
    } else {
        blank = false;
    }
    return blank;
}

// Defines a Phrase Object
function Phrase(content) {
    this.content = content;
    
    // process string to lowercase
    this.processor = function(string) {
        return string.toLowerCase();
    }
    
    // Returns content processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }

    // Returns true for a plaindrome, false otherwise
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
    
    // exercise 7.1
    // makes the phrase LOUDER
    this.louder = function louder() {
        return this.content.toUpperCase();
    }
    
    // exercise 7.3
    this.blankPalindrome = function blankPalindrome() {
        return this.content.blank();
    }
}

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
    
    // Returns translation processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}

TranslatedPhrase.prototype = new Phrase();
