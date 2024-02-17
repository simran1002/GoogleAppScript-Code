function doGet(e) {
  var presentationUrl = createStyledSlide();
 
  var htmlOutput = '<html><body><iframe width="800" height="600" src="' + presentationUrl + '"></iframe></body></html>';
 
  return HtmlService.createHtmlOutput(htmlOutput);
}


function createStyledSlide() {
  var FONT_SIZE = 30;


  var presentation = SlidesApp.create('New Styled Presentation');
  presentation.getSlides()[0].getBackground().setSolidFill('#FFFFFF');


  while (presentation.getSlides().length > 1) {
    presentation.getSlides()[1].remove();
  }


  var slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE);
  var title = slide.getShapes()[0];


  title.getText().setText('The Necessity of Systems Thinking in Leadership');
  title.getText().getTextStyle().setFontSize(FONT_SIZE);
  title.getText().getTextStyle().setBold(true);
  title.getText().getTextStyle().setFontFamily('Arial');
  title.getText().getTextStyle().setForegroundColor('#000000');
 
  title.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);


  var presentationUrl = DriveApp.getFileById(presentation.getId()).getUrl();
 
  return presentationUrl;
}


function runScript() {
  return createStyledSlide();
}
