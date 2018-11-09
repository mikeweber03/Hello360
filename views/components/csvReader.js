class csvReader {
    
    constructor() {}

    processData(entireFile) {
       
        var allTextLines = entireFile.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var objs = [];
        for (var i = 1; i < allTextLines.length; i++) {
            var newObj = allTextLines[i].split(',');
            if (newObj.length == headers.length) {
                var o = new Object();
                for (var j = 0; j < headers.length; j++) {
                    o[headers[j]] = newObj[j];
                }
                objs.push(o);
            }            
        }
        return objs;
    }
}
export default csvReader;








