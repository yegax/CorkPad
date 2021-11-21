$(document).ready(function(){
    
    function saveAs(uri, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
    }

	//PDF Export
	$("#pdfDownload").click(function(){
	
        html2canvas(document.getElementById("printDiv"), {
            useCORS: true,
            onrendered: function(canvas) {

                var pdfData = canvas.toDataURL('image/png');
                var doc = new jsPDF('p', 'mm', [470, 557]); //210mm wide and 297mm high
                doc.addImage(pdfData, 'PNG', 10, 10);
                doc.save('CorkPad.pdf');
            }
        });

	});

	//PNG Export	
	$("#pngDownload").click(function(){
	
        html2canvas(document.getElementById("printDiv"), {
            useCORS: true,
            onrendered: function(canvas) {
                saveAs(canvas.toDataURL(), 'CorkPad.png'); 
            }
        });

	});

    //JPG Export	
	$("#jpgDownload").click(function(){
	
        html2canvas(document.getElementById("printDiv"), {
            useCORS: true,
            onrendered: function(canvas) {
                var imgData = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                saveAs(imgData, 'CorkPad.jpg');
            }
        });

	});
	
    
	
	
})