module.exports = Phrase;

// add `reverse` to all strings
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

// Defines a Phrase Object
function Phrase(content) {
    this.content = content;
    
    // Returns content processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }
    
    // Returns the letters in the content.
    this.letters = function letters() {
        return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
//        let theLetters = [];
//        const letterRegEx = /[a-z]/i;
//        Array.from(this.content).forEach(function(charater) {
//           if (charater.match(letterRegEx)) {
//               theLetters.push(charater);
//           } 
//        });
//        
//        return theLetters.join("");
    }

    // Returns true for a plaindrome, false otherwise
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
}
