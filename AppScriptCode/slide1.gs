function myFunction() {
  const presentation = SlidesApp.create("Doted Line logo inside circle");
  const slide = presentation.appendSlide();


  const title  = slide.insertTextBox('Indian History')
  const titleStyle = title.getText().getTextStyle()
  titleStyle.setFontSize(24)
  titleStyle.setFontFamily('League Spartan')
  titleStyle.setForegroundColor('#000000')
  titleStyle.setBold(true)
  title.setTop(40)
  title.setLeft(40)
  title.setWidth(350)


  const dotLine = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5,0,2.5,280)
  dotLine.setDashStyle(SlidesApp.DashStyle.DASH)
  dotLine.setTop(80)
  dotLine.setLeft(40)


  const subtitle1 = slide.insertTextBox('Key Events in 1999')
  const subtitle1Style = subtitle1.getText().getTextStyle()
  subtitle1Style.setFontSize(14)
  subtitle1Style.setFontFamily('Lato')
  subtitle1Style.setForegroundColor('#000000')
  subtitle1Style.setBold(true)
  const subtitle1Range = subtitle1.getText();
  const subtitle1paragraphStyle = subtitle1Range.getParagraphStyle();
  subtitle1.setTop(90)
  subtitle1.setLeft(50)
  subtitle1.setWidth(300)

  const subtitle2 = slide.insertTextBox('Significant Achievements')
  const subtitle2Style = subtitle2.getText().getTextStyle()
  subtitle2Style.setFontSize(14)
  subtitle2Style.setFontFamily('Lato')
  subtitle2Style.setForegroundColor('#000000')
  subtitle2Style.setBold(true)
  const subtitle2Range = subtitle2.getText();
  const subtitle2paragraphStyle = subtitle2Range.getParagraphStyle();
  subtitle2.setTop(90)
  subtitle2.setLeft(360)
  subtitle2.setWidth(500)


    const info1  = slide.insertTextBox('Kargil War between India and Pakistan')
  const info1Style = info1.getText().getTextStyle()
  info1Style.setFontSize(11)
  info1Style.setFontFamily('Inter')
  info1Style.setForegroundColor('#000000')
  info1.setTop(130)
  info1.setLeft(50)
  info1.setWidth(280)



  
  const info2  = slide.insertTextBox('Formation of the National Commission for Women in India.')
  const info2Style = info2.getText().getTextStyle()
  info2Style.setFontSize(11)
  info2Style.setFontFamily('Inter')
  info2Style.setForegroundColor('#000000')
  info2.setTop(170)
  info2.setLeft(50)
  info2.setWidth(280)

 const info5  = slide.insertTextBox('Launch of the Indian National Voters Day.')
  const info5Style = info5.getText().getTextStyle()
  info5Style.setFontSize(11)
  info5Style.setFontFamily('Inter')
  info5Style.setForegroundColor('#000000')
  info5.setTop(210)
  info5.setLeft(50)
  info5.setWidth(280)



 const dotLine1 = slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 2.5,0,2.5,280)
  dotLine1.setDashStyle(SlidesApp.DashStyle.DASH)
  dotLine1.setTop(80)
  dotLine1.setLeft(350)

    const info3  = slide.insertTextBox("India's population crossed the 1 billion mark in 1999.")
  const info3Style = info3.getText().getTextStyle()
  info3Style.setFontSize(11)
  info3Style.setFontFamily('Inter')
  info3Style.setForegroundColor('#000000')
  info3.setTop(130)
  info3.setLeft(360)
  info3.setWidth(280)



    const info4  = slide.insertTextBox("Establishment of the Indian Space Research Organization's Polar Satellite Launch Vehicle(PSLV).")
  const info4Style = info4.getText().getTextStyle()
  info4Style.setFontSize(11)
  info4Style.setFontFamily('Inter')
  info4Style.setForegroundColor('#000000')
  info4.setTop(170)
  info4.setLeft(360)
  info4.setWidth(280)

const bulletPoint = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  bulletPoint.getBorder().setTransparent();
  bulletPoint.getFill().setSolidFill('#FFFF00');
  bulletPoint.setWidth(10); // Adjust the width as needed
bulletPoint.setHeight(10); // Adjust the size as needed
  bulletPoint.setTop(100); // Adjust the position as needed
  bulletPoint.setLeft(35);

const bulletPoint1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  bulletPoint1.getBorder().setTransparent();
  bulletPoint1.getFill().setSolidFill('#FFFF00');
  bulletPoint1.setWidth(10); // Adjust the width as needed
bulletPoint1.setHeight(10); // Adjust the size as needed
  bulletPoint1.setTop(100); // Adjust the position as needed
  bulletPoint1.setLeft(345);


}