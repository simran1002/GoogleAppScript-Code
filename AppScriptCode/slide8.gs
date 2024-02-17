function myFunction() {
  const presentation = SlidesApp.create("Number logo inside circle");
  const slide = presentation.appendSlide();


const rectshape2 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
  rectshape2.setWidth(670)
  rectshape2.setHeight(310)
  rectshape2.setTop(90)
  rectshape2.setLeft(30)
  rectshape2.getBorder().getLineFill().setSolidFill('#000000')
  rectshape2.getFill().setSolidFill('#ffffff')
  rectshape2.getBorder().setWeight(3)
  

  const title = slide.insertTextBox('Indian History');
  const titleStyle = title.getText().getTextStyle();
  titleStyle.setFontSize(24);
  titleStyle.setFontFamily('League Spartan');
  titleStyle.setForegroundColor('#000000');
  titleStyle.setBold(true);
  title.setTop(40);
  title.setLeft(40);
  title.setWidth(200);

  const info1 = slide.insertTextBox("In the realm of sports, India's cricket team achieved notable victories, including the famous series win against Pakistan in Chennai, cementing their place in sporting history.");
  const info1Style = info1.getText().getTextStyle();
  info1Style.setFontSize(11);
  info1Style.setFontFamily('Inter');
  info1Style.setForegroundColor('#000000');
  info1.setTop(100);
  info1.setLeft(140);
  info1.setWidth(200);

  const info2 = slide.insertTextBox('!999 marked the formation of the National Democratic Alliance (NDA) government in India, led by Prime Minister Atal Bihari Vajpayee, bringing significant political changes.');
  const info2Style = info2.getText().getTextStyle();
  info2Style.setFontSize(11);
  info2Style.setFontFamily('Inter');
  info2Style.setForegroundColor('#000000');
  info2.setTop(200);
  info2.setLeft(140);
  info2.setWidth(200);

  const info5 = slide.insertTextBox("India experienced a steady economic growth rate in 1999, with sectors like IT and telecommunications showing promising development and attracting global investments.");
  const info5Style = info5.getText().getTextStyle();
  info5Style.setFontSize(11);
  info5Style.setFontFamily('Inter');
  info5Style.setForegroundColor('#000000');
  info5.setTop(300);
  info5.setLeft(140);
  info5.setWidth(200);

  const info3 = slide.insertTextBox("The year witnessed cultural milestones like the release of iconic Bollywood movies and the celebration of traditional festivals, reflecting the rich cultural tapestry of India.");
  const info3Style = info3.getText().getTextStyle();
  info3Style.setFontSize(11);
  info3Style.setFontFamily('Inter');
  info3Style.setForegroundColor('#000000');
  info3.setTop(100);
  info3.setLeft(500);
  info3.setWidth(200);

  const info4 = slide.insertTextBox("Technological advancements in 1999 included the launch of the first indigenously developed satellite, INSAT- 2E, marking a significant milestone in India's space exploration journey.");
  const info4Style = info4.getText().getTextStyle();
  info4Style.setFontSize(11);
  info4Style.setFontFamily('Inter');
  info4Style.setForegroundColor('#000000');
  info4.setTop(200);
  info4.setLeft(500);
  info4.setWidth(200);

  const info6 = slide.insertTextBox("1999 saw several natural disasters in India, including cyclones and earthquakes, highlighting the importance of disaster preparedness and mitigation efforts.");
  const info6Style = info6.getText().getTextStyle();
  info6Style.setFontSize(11);
  info6Style.setFontFamily('Inter');
  info6Style.setForegroundColor('#000000');
  info6.setTop(300);
  info6.setLeft(500);
  info6.setWidth(200);


  const subtitle1 = slide.insertTextBox('Sports Achievements')
  const subtitle1Style = subtitle1.getText().getTextStyle()
  subtitle1Style.setFontSize(14)
  subtitle1Style.setFontFamily('Lato')
  subtitle1Style.setForegroundColor('#000000')
  subtitle1Style.setBold(true)
  subtitle1.setTop(100)
  subtitle1.setLeft(40)
  subtitle1.setWidth(130)

  const subtitle2 = slide.insertTextBox('Political Landscape')
  const subtitle2Style = subtitle2.getText().getTextStyle()
  subtitle2Style.setFontSize(14)
  subtitle2Style.setFontFamily('Lato')
  subtitle2Style.setForegroundColor('#000000')
  subtitle2Style.setBold(true)
  subtitle2.setTop(200)
  subtitle2.setLeft(40)
  subtitle2.setWidth(130)

  const subtitle3 = slide.insertTextBox('Economic Growth')
  const subtitle3Style = subtitle3.getText().getTextStyle()
  subtitle3Style.setFontSize(14)
  subtitle3Style.setFontFamily('Lato')
  subtitle3Style.setForegroundColor('#000000')
  subtitle3Style.setBold(true)
  subtitle3.setTop(300)
  subtitle3.setLeft(40)
  subtitle3.setWidth(100)

  const subtitle4 = slide.insertTextBox('Cultural Events')
  const subtitle4Style = subtitle4.getText().getTextStyle()
  subtitle4Style.setFontSize(14)
  subtitle4Style.setFontFamily('Lato')
  subtitle4Style.setForegroundColor('#000000')
  subtitle4Style.setBold(true)
  subtitle4.setTop(100)
  subtitle4.setLeft(400)
  subtitle4.setWidth(130)

   const subtitle5 = slide.insertTextBox('Technological Advancements')
  const subtitle5Style = subtitle5.getText().getTextStyle()
  subtitle5Style.setFontSize(14)
  subtitle5Style.setFontFamily('Lato')
  subtitle5Style.setForegroundColor('#000000')
  subtitle5Style.setBold(true)
  subtitle5.setTop(200)
  subtitle5.setLeft(400)
  subtitle5.setWidth(130)

   const subtitle6 = slide.insertTextBox('Natural Disasters')
  const subtitle6Style = subtitle6.getText().getTextStyle()
  subtitle6Style.setFontSize(14)
  subtitle6Style.setFontFamily('Lato')
  subtitle6Style.setForegroundColor('#000000')
  subtitle6Style.setBold(true)
  subtitle6.setTop(300)
  subtitle6.setLeft(400)
  subtitle6.setWidth(100)

const line3= slide.insertLine(SlidesApp.LineCategory.STRAIGHT,2.5, 0, 2.5, 310)
  line3.setLeft(370)
  line3.setTop(90)
  line3.setWeight(3)
  line3.getLineFill().setSolidFill('#000000')

  const line4= slide.insertLine(SlidesApp.LineCategory.STRAIGHT,0, 2.5,670, 2.5)
  line4.setLeft(30)
  line4.setTop(200)
  line4.setWeight(3)
  line4.getLineFill().setSolidFill('#000000')

const line5= slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 670, 2.5)
  line5.setLeft(30)
  line5.setTop(300)
  line5.setWeight(3)
  line5.getLineFill().setSolidFill('#000000')


}