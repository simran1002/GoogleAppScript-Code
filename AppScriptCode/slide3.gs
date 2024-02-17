function myFunction() {
  const presentation = SlidesApp.create("Number logo inside circle");
  const slide = presentation.appendSlide();

  const title = slide.insertTextBox('Indian History');
  const titleStyle = title.getText().getTextStyle();
  titleStyle.setFontSize(24);
  titleStyle.setFontFamily('League Spartan');
  titleStyle.setForegroundColor('#000000');
  titleStyle.setBold(true);
  title.setTop(40);
  title.setLeft(40);
  title.setWidth(200);

  const info1 = slide.insertTextBox('In 1999, India conducted successful nuclear tests in Pokhran, marking a significant milestone in its defense capabilities.');
  const info1Style = info1.getText().getTextStyle();
  info1Style.setFontSize(11);
  info1Style.setFontFamily('Inter');
  info1Style.setForegroundColor('#000000');
  info1.setTop(80);
  info1.setLeft(75);
  info1.setWidth(200);

  const info2 = slide.insertTextBox('Kargil War took place in 1999 between India and Pakistan, resulting in a victory for India.');
  const info2Style = info2.getText().getTextStyle();
  info2Style.setFontSize(11);
  info2Style.setFontFamily('Inter');
  info2Style.setForegroundColor('#000000');
  info2.setTop(180);
  info2.setLeft(75);
  info2.setWidth(200);

  const info5 = slide.insertTextBox("The National Democratic Alliance(NDA) government led by Atal Bihari Vajpayee came to power in India in 1999.");
  const info5Style = info5.getText().getTextStyle();
  info5Style.setFontSize(11);
  info5Style.setFontFamily('Inter');
  info5Style.setForegroundColor('#000000');
  info5.setTop(280);
  info5.setLeft(75);
  info5.setWidth(200);

  const info3 = slide.insertTextBox("The Indian cricket team reached the World Cup Super Six stage in 1999 led by captain Mohammad Azharuddin.");
  const info3Style = info3.getText().getTextStyle();
  info3Style.setFontSize(11);
  info3Style.setFontFamily('Inter');
  info3Style.setForegroundColor('#000000');
  info3.setTop(80);
  info3.setLeft(385);
  info3.setWidth(200);

  const info4 = slide.insertTextBox("India saw the launch of its first indigenously developed satellite, INSAT-3B, in 1999 , boosting communication capabilities.");
  const info4Style = info4.getText().getTextStyle();
  info4Style.setFontSize(11);
  info4Style.setFontFamily('Inter');
  info4Style.setForegroundColor('#000000');
  info4.setTop(180);
  info4.setLeft(385);
  info4.setWidth(200);

  const info6 = slide.insertTextBox("The Kumbh Mela, one of the largest religious gatherings, took place in Allahabad in 1999, attracting millions of pilgrims.");
  const info6Style = info6.getText().getTextStyle();
  info6Style.setFontSize(11);
  info6Style.setFontFamily('Inter');
  info6Style.setForegroundColor('#000000');
  info6.setTop(280);
  info6.setLeft(385);
  info6.setWidth(200);

  const circle1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  configureCircle(circle1, '#4169E1', 30, 30, 100, 40);
  const numericValue1 = slide.insertTextBox('>'); // Change to insertTextBox
  configureNumericValue(numericValue1, '#4169E1', 18, 42.5, 97.5);

  const circle2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  configureCircle(circle2, '#4169E1', 30, 30, 200, 40);
  const numericValue2 = slide.insertTextBox('>'); // Change to insertTextBox
  configureNumericValue(numericValue2, '#1E90FF', 18, 42.5, 197.5);

  const circle3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  configureCircle(circle3, '#4169E1', 30, 30, 300, 40);
  const numericValue3 = slide.insertTextBox('>'); // Change to insertTextBox
  configureNumericValue(numericValue3, '#4169E1', 18, 42.5, 297.5);

  const circle4 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  configureCircle(circle4, '#4169E1', 30, 30, 100, 350);
  const numericValue4 = slide.insertTextBox('>'); // Change to insertTextBox
  configureNumericValue(numericValue4, '#4169E1', 18, 352.5, 97.5);

  const circle5 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  configureCircle(circle5, '#4169E1', 30, 30, 200, 350);
  const numericValue5 = slide.insertTextBox('>'); // Change to insertTextBox
  configureNumericValue(numericValue5, '#4169E1', 18, 352.5, 197.5);

  const circle6 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  configureCircle(circle6, '#4169E1', 30, 30, 300, 350);
  const numericValue6 = slide.insertTextBox('>'); // Change to insertTextBox
  configureNumericValue(numericValue6, '#4169E1', 18, 352.5, 297.5);

  Logger.log('Presentation created successfully.');

  // Function to configure circle properties
  function configureCircle(circle, borderColor, width, height, top, left) {
    circle.getBorder().getLineFill().setSolidFill(borderColor); // Set border color to blue
    circle.getFill().setTransparent();
    circle.setWidth(width);
    circle.setHeight(height);
    circle.setTop(top);
    circle.setLeft(left);
  }

  // Function to configure numeric value properties
  function configureNumericValue(numericValue, fontColor, fontSize, left, top) {
    const numericValueStyle = numericValue.getText().getTextStyle(); // Change to getText()
    numericValueStyle.setFontSize(fontSize);
    numericValueStyle.setForegroundColor(fontColor);
    numericValue.setLeft(left);
    numericValue.setTop(top);
  }
}