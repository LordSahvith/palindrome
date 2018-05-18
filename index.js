module.exports = Phrase;

// add `reverse` to all strings
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
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
}
