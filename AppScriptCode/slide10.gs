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


  const subtitle1 = slide.insertTextBox('1999')
const subtitle1Style = subtitle1.getText().getTextStyle()
  subtitle1Style.setFontSize(14)
  subtitle1Style.setFontFamily('Lato')
  subtitle1Style.setForegroundColor('#000000')
  subtitle1Style.setBold(true)
  const subtitle1Range = subtitle1.getText();
  const subtitle1paragraphStyle = subtitle1Range.getParagraphStyle();
  subtitle1.setTop(90)
  subtitle1.setLeft(35)
  subtitle1.setWidth(300)

  const subtitle2 = slide.insertTextBox('Additional Events')
  const subtitle2Style = subtitle2.getText().getTextStyle()
  subtitle2Style.setFontSize(14)
  subtitle2Style.setFontFamily('Lato')
  subtitle2Style.setForegroundColor('#000000')
  subtitle2Style.setBold(true)
  const subtitle2Range = subtitle2.getText();
  const subtitle2paragraphStyle = subtitle2Range.getParagraphStyle();
  subtitle2.setTop(90)
  subtitle2.setLeft(340)
 subtitle2.setWidth(300)


    const info1  = slide.insertTextBox('In 1999, India conducted its second nuclear tests at Pokhran, marking a significant milestone in its defense capabilities.')
  const info1Style = info1.getText().getTextStyle()
  info1Style.setFontSize(11)
  info1Style.setFontFamily('Inter')
  info1Style.setForegroundColor('#000000')
  info1.setTop(120)
  info1.setLeft(55)
  info1.setWidth(280)



  
  const info2  = slide.insertTextBox('Kargil War took place between India and Pakistan , leading to intense military conflict in the Kargil district of Jammu and Kashmir.')
  const info2Style = info2.getText().getTextStyle()
  info2Style.setFontSize(11)
  info2Style.setFontFamily('Inter')
  info2Style.setForegroundColor('#000000')
  info2.setTop(180)
  info2.setLeft(55)
  info2.setWidth(280)

const info5  = slide.insertTextBox("This year also saw the establishment of the National Commission for Women in India, focusing on gender equality and women's rights.")
  const info5Style = info5.getText().getTextStyle()
  info5Style.setFontSize(11)
  info5Style.setFontFamily('Inter')
  info5Style.setForegroundColor('#000000')
  info5.setTop(240)
  info5.setLeft(55)
  info5.setWidth(280)


    const info3  = slide.insertTextBox("The Indian cricket team won the Asian Test Championship in 1999, showcasing their sporting prowess.")
  const info3Style = info3.getText().getTextStyle()
  info3Style.setFontSize(11)
  info3Style.setFontFamily('Inter')
 info3Style.setForegroundColor('#000000')
  info3.setTop(120)
  info3.setLeft(365)
  info3.setWidth(280)



    const info4  = slide.insertTextBox("The Indian film 'Hum Dil De Chuke Sanam' was released , becoming a major success in Bollywood.")
  const info4Style = info4.getText().getTextStyle()
  info4Style.setFontSize(11)
  info4Style.setFontFamily('Inter')
  info4Style.setForegroundColor('#000000')
  info4.setTop(180)
  info4.setLeft(365)
  info4.setWidth(280)

  const info6  = slide.insertTextBox("The Indian economy experienced growth and reforms, with the government implementing policies to boost development.")
  const info6Style = info6.getText().getTextStyle()
  info6Style.setFontSize(11)
  info6Style.setFontFamily('Inter')
  info6Style.setForegroundColor('#000000')
  info6.setTop(240)
  info6.setLeft(365)
  info6.setWidth(280)

const bulletPoint = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  bulletPoint.getBorder().setTransparent();
  bulletPoint.getFill().setSolidFill('#000000');
  bulletPoint.setWidth(5); // Adjust the width as needed
bulletPoint.setHeight(5); // Adjust the size as needed
bulletPoint.setTop(130); // Adjust the position as needed
  bulletPoint.setLeft(50);

const bulletPoint1 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  bulletPoint1.getBorder().setTransparent();
  bulletPoint1.getFill().setSolidFill('#000000');
  bulletPoint1.setWidth(5); // Adjust the width as needed
bulletPoint1.setHeight(5); // Adjust the size as needed
  bulletPoint1.setTop(190); // Adjust the position as needed
  bulletPoint1.setLeft(50);

const bulletPoint2 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  bulletPoint2.getBorder().setTransparent();
  bulletPoint2.getFill().setSolidFill('#000000');
  bulletPoint2.setWidth(5); // Adjust the width as needed
bulletPoint2.setHeight(5); // Adjust the size as needed
  bulletPoint2.setTop(250); // Adjust the position as needed
  bulletPoint2.setLeft(50);

  const bulletPoint3 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  bulletPoint3.getBorder().setTransparent();
  bulletPoint3.getFill().setSolidFill('#000000');
  bulletPoint3.setWidth(5); // Adjust the width as needed
bulletPoint3.setHeight(5); // Adjust the size as needed
  bulletPoint3.setTop(130); // Adjust the position as needed
  bulletPoint3.setLeft(360);

  const bulletPoint4 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  bulletPoint4.getBorder().setTransparent();
  bulletPoint4.getFill().setSolidFill('#000000');
  bulletPoint4.setWidth(5); // Adjust the width as needed
bulletPoint4.setHeight(5); // Adjust the size as needed
  bulletPoint4.setTop(190); // Adjust the position as needed
  bulletPoint4.setLeft(360);

  const bulletPoint5 = slide.insertShape(SlidesApp.ShapeType.ELLIPSE);
  bulletPoint5.getBorder().setTransparent();
  bulletPoint5.getFill().setSolidFill('#000000');
  bulletPoint5.setWidth(5); // Adjust the width as needed
bulletPoint5.setHeight(5); // Adjust the size as needed
  bulletPoint5.setTop(250); // Adjust the position as needed
  bulletPoint5.setLeft(360);

}