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

  const info1 = slide.insertTextBox("Kargil War between India and Pakistan. Cyclone devastated Odisha. Indian cricket Sourav Ganguly became captain of the national team.");
  const info1Style = info1.getText().getTextStyle();
  info1Style.setFontSize(11);
  info1Style.setFontFamily('Inter');
  info1Style.setForegroundColor('#000000');
  info1.setTop(120);
  info1.setLeft(40);
  info1.setWidth(300);

  const info2 = slide.insertTextBox('Indian economy saw significant growth. Infosys became the first Indian company to be listed on the NASDAQ stock exchange.');
  const info2Style = info2.getText().getTextStyle();
  info2Style.setFontSize(11);
  info2Style.setFontFamily('Inter');
  info2Style.setForegroundColor('#000000');
  info2.setTop(260);
  info2.setLeft(40);
  info2.setWidth(300);


  const info3 = slide.insertTextBox("Release of the movie 'Hum Dil De Chuke Sanam'. Indian classical musician Ravi Shankar received a Grammy Lifetime Achievement Award.");
  const info3Style = info3.getText().getTextStyle();
  info3Style.setFontSize(11);
  info3Style.setFontFamily('Inter');
  info3Style.setForegroundColor('#000000');
  info3.setTop(120);
  info3.setLeft(360);
  info3.setWidth(300);

  const info4 = slide.insertTextBox("Atal Bihari Vajpayee was serving as the Prime Minister of India. The National Democratic Alliance government was in power.");
  const info4Style = info4.getText().getTextStyle();
  info4Style.setFontSize(11);
  info4Style.setFontFamily('Inter');
  info4Style.setForegroundColor('#000000');
  info4.setTop(260);
  info4.setLeft(360);
  info4.setWidth(300);


  const subtitle1 = slide.insertTextBox('Events in 1999')
  const subtitle1Style = subtitle1.getText().getTextStyle()
  subtitle1Style.setFontSize(14)
  subtitle1Style.setFontFamily('Lato')
  subtitle1Style.setForegroundColor('#000000')
  subtitle1Style.setBold(true)
  subtitle1.setTop(90)
  subtitle1.setLeft(40)
  subtitle1.setWidth(300)

  const subtitle2 = slide.insertTextBox('Economic Landscape')
  const subtitle2Style = subtitle2.getText().getTextStyle()
  subtitle2Style.setFontSize(14)
  subtitle2Style.setFontFamily('Lato')
  subtitle2Style.setForegroundColor('#000000')
  subtitle2Style.setBold(true)
  subtitle2.setTop(220)
  subtitle2.setLeft(40)
  subtitle2.setWidth(300)

  const subtitle3 = slide.insertTextBox('Cultural Highlights')
  const subtitle3Style = subtitle3.getText().getTextStyle()
  subtitle3Style.setFontSize(14)
  subtitle3Style.setFontFamily('Lato')
  subtitle3Style.setForegroundColor('#000000')
  subtitle3Style.setBold(true)
  subtitle3.setTop(90)
  subtitle3.setLeft(360)
  subtitle3.setWidth(300)

  const subtitle4 = slide.insertTextBox('Political Developments')
  const subtitle4Style = subtitle4.getText().getTextStyle()
  subtitle4Style.setFontSize(14)
  subtitle4Style.setFontFamily('Lato')
  subtitle4Style.setForegroundColor('#000000')
  subtitle4Style.setBold(true)
  subtitle4.setTop(220)
  subtitle4.setLeft(360)
  subtitle4.setWidth(300)


  const line1= slide.insertLine(SlidesApp.LineCategory.STRAIGHT,0, 2.5,300, 2.5)
  line1.setLeft(45)
  line1.setTop(120)
  line1.setWeight(3)
  line1.getLineFill().setSolidFill('#000000')

  
  const line2= slide.insertLine(SlidesApp.LineCategory.STRAIGHT,0, 2.5,300, 2.5)
  line2.setLeft(45)
  line2.setTop(250)
  line2.setWeight(3)
  line2.getLineFill().setSolidFill('#000000')

  const line3= slide.insertLine(SlidesApp.LineCategory.STRAIGHT,0, 2.5,300, 2.5)
  line3.setLeft(365)
  line3.setTop(120)
  line3.setWeight(3)
  line3.getLineFill().setSolidFill('#000000')

const line5= slide.insertLine(SlidesApp.LineCategory.STRAIGHT, 0, 2.5, 300, 2.5)
  line5.setLeft(365)
  line5.setTop(250)
  line5.setWeight(3)
  line5.getLineFill().setSolidFill('#000000')


}