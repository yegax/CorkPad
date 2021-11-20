$(document).ready(function(){

	//pdf	
	$("#pdfDownload").click(function(){
	
        html2canvas(document.getElementById("printDiv"), {
            onrendered: function(canvas) {

                var imgData = canvas.toDataURL('image/png');
                console.log('Report Image URL: '+imgData);
                var doc = new jsPDF('p', 'mm', [297, 210]); //210mm wide and 297mm high
                
                doc.addImage(imgData, 'PNG', 10, 10);
                doc.save('sample.pdf');
            }
        });

	});
	
	
})