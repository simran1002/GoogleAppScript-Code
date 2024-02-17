function myFunction() {
  const presentation = SlidesApp.create("Number logo inside circle");
  const slide = presentation.appendSlide();
  

  const rectshape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
  rectshape1.setWidth(300)
  rectshape1.setHeight(120)
  rectshape1.setTop(80)
  rectshape1.setLeft(30)
  rectshape1.getBorder().getLineFill().setSolidFill('#2d11ee')
  rectshape1.getFill().setSolidFill('#ffffff')
  rectshape1.getBorder().setWeight(2)

  const rectshape2 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
  rectshape2.setWidth(300)
  rectshape2.setHeight(120)
  rectshape2.setTop(210)
  rectshape2.setLeft(30)
  rectshape2.getBorder().getLineFill().setSolidFill('#2d11ee')
  rectshape2.getFill().setSolidFill('#ffffff')
  rectshape2.getBorder().setWeight(2)

  const rectshape3 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
  rectshape3.setWidth(300)
  rectshape3.setHeight(120)
  rectshape3.setTop(80)
  rectshape3.setLeft(350)
  rectshape3.getBorder().getLineFill().setSolidFill('#2d11ee')
  rectshape3.getFill().setSolidFill('#ffffff')
  rectshape3.getBorder().setWeight(2)

  const rectshape4 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE)
  rectshape4.setWidth(300)
  rectshape4.setHeight(120)
  rectshape4.setTop(210)
  rectshape4.setLeft(350)
  rectshape4.getBorder().getLineFill().setSolidFill('#2d11ee')
  rectshape4.getFill().setSolidFill('#ffffff')
  rectshape4.getBorder().setWeight(2)

  const title = slide.insertTextBox('Indian History');
  const titleStyle = title.getText().getTextStyle();
  titleStyle.setFontSize(24);
  titleStyle.setFontFamily('League Spartan');
  titleStyle.setForegroundColor('#000000');
  titleStyle.setBold(true);
  title.setTop(40);
  title.setLeft(40);
  title.setWidth(200);

  const info1 = slide.insertTextBox("Kargil War between India and Pakistan. India's successful test of the Agni-||medium-range ballistic missile.");
  const info1Style = info1.getText().getTextStyle();
  info1Style.setFontSize(11);
  info1Style.setFontFamily('Inter');
  info1Style.setForegroundColor('#000000');
  info1.setTop(120);
  info1.setLeft(40);
  info1.setWidth(250);

  const info2 = slide.insertTextBox("India's GDP growth rate at 6.7%. Introduction of the 'Technology Upgradation Fund Scheme' for the textile industry.");
  const info2Style = info2.getText().getTextStyle();
  info2Style.setFontSize(11);
  info2Style.setFontFamily('Inter');
  info2Style.setForegroundColor('#000000');
  info2.setTop(255);
  info2.setLeft(40);
  info2.setWidth(250);


  const info3 = slide.insertTextBox("Release of the movie 'Hum Dil De Chuke Sanam' and the music album 'Taal'. Sachin Tendulkar scoring his 22nd Test century.");
  const info3Style = info3.getText().getTextStyle();
  info3Style.setFontSize(11);
  info3Style.setFontFamily('Inter');
  info3Style.setForegroundColor('#000000');
  info3.setTop(120);
  info3.setLeft(360);
  info3.setWidth(250);

  const info4 = slide.insertTextBox("Atal Bihari Vajpayee was serving as the Prime Minister of India. Establishment of the National Commission for Women.");
  const info4Style = info4.getText().getTextStyle();
  info4Style.setFontSize(11);
  info4Style.setFontFamily('Inter');
  info4Style.setForegroundColor('#000000');
  info4.setTop(255);
  info4.setLeft(360);
  info4.setWidth(250);


  const subtitle1 = slide.insertTextBox('Events in 1999')
  const subtitle1Style = subtitle1.getText().getTextStyle()
  subtitle1Style.setFontSize(14)
  subtitle1Style.setFontFamily('Lato')
  subtitle1Style.setForegroundColor('#2d11ee')
  subtitle1Style.setBold(true)
  subtitle1.setTop(90)
  subtitle1.setLeft(40)
  subtitle1.setWidth(300)

  const subtitle2 = slide.insertTextBox('Economic Landscape')
  const subtitle2Style = subtitle2.getText().getTextStyle()
  subtitle2Style.setFontSize(14)
  subtitle2Style.setFontFamily('Lato')
  subtitle2Style.setForegroundColor('#2d11ee')
  subtitle2Style.setBold(true)
  subtitle2.setTop(220)
  subtitle2.setLeft(40)
  subtitle2.setWidth(300)

  const subtitle3 = slide.insertTextBox('Cultural Highlights')
  const subtitle3Style = subtitle3.getText().getTextStyle()
  subtitle3Style.setFontSize(14)
  subtitle3Style.setFontFamily('Lato')
  subtitle3Style.setForegroundColor('#2d11ee')
  subtitle3Style.setBold(true)
  subtitle3.setTop(90)
  subtitle3.setLeft(360)
  subtitle3.setWidth(300)

  const subtitle4 = slide.insertTextBox('Political Developments')
  const subtitle4Style = subtitle4.getText().getTextStyle()
  subtitle4Style.setFontSize(14)
  subtitle4Style.setFontFamily('Lato')
  subtitle4Style.setForegroundColor('#2d11ee')
  subtitle4Style.setBold(true)
  subtitle4.setTop(220)
  subtitle4.setLeft(360)
  subtitle4.setWidth(300)


}