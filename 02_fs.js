const fs = require('fs');

fs.writeFile('message.txt', 'Node.js is awesome!', (err) => {
    if (err) {
        console.error('\nError creating file:', err);
    } else {
        console.log('\nFile created successfully!');
    }
});

fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    }
    console.log('File content:', data);
    fs.unlink('message.txt', (err) => {
        if (err) {
            console.error('Error deleting file:', err, '\n');
        } else {
            console.log('File deleted successfully!\n');
        }
    });
});

  
