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

  const info1 = slide.insertTextBox('In 1999, India conducted successful nuclear tests at Pokhran, leading to international sanctions. Kargil War with Pakistan also took place during this year.');
  const info1Style = info1.getText().getTextStyle();
  info1Style.setFontSize(11);
  info1Style.setFontFamily('Inter');
  info1Style.setForegroundColor('#000000');
  info1.setTop(100);
  info1.setLeft(140);
  info1.setWidth(200);

  const info2 = slide.insertTextBox('Atal Bihari Vajpayee served as the Prime Minister of India. The National Democratic Alliance government was in power.');
  const info2Style = info2.getText().getTextStyle();
  info2Style.setFontSize(11);
  info2Style.setFontFamily('Inter');
  info2Style.setForegroundColor('#000000');
  info2.setTop(200);
  info2.setLeft(140);
  info2.setWidth(200);

  const info5 = slide.insertTextBox("India's GDP growth rate in 1999 was approximately 6%. The country focused on economic reforms and liberalization policies.");
  const info5Style = info5.getText().getTextStyle();
  info5Style.setFontSize(11);
  info5Style.setFontFamily('Inter');
  info5Style.setForegroundColor('#000000');
  info5.setTop(300);
  info5.setLeft(140);
  info5.setWidth(200);

  const info3 = slide.insertTextBox("Popular Bollywood movies released in 1999 include 'Hum Dil De Chuke Sanam' and 'Taal', showcasing India's vibrant film industry. ");
  const info3Style = info3.getText().getTextStyle();
  info3Style.setFontSize(11);
  info3Style.setFontFamily('Inter');
  info3Style.setForegroundColor('#000000');
  info3.setTop(100);
  info3.setLeft(500);
  info3.setWidth(200);

  const info4 = slide.insertTextBox("The year 1999 marked the beginning of the internet boom in India with increasing internet penetration and the launch of e-commerce platforms.");
  const info4Style = info4.getText().getTextStyle();
  info4Style.setFontSize(11);
  info4Style.setFontFamily('Inter');
  info4Style.setForegroundColor('#000000');
  info4.setTop(200);
  info4.setLeft(500);
  info4.setWidth(200);

  const info6 = slide.insertTextBox("Society witnessed evolving gender roles and discussions on women's empowerment. The Kargil conflict also led to national unity and patriotism.");
  const info6Style = info6.getText().getTextStyle();
  info6Style.setFontSize(11);
  info6Style.setFontFamily('Inter');
  info6Style.setForegroundColor('#000000');
  info6.setTop(300);
  info6.setLeft(500);
  info6.setWidth(200);


  const subtitle1 = slide.insertTextBox('Key Events')
  const subtitle1Style = subtitle1.getText().getTextStyle()
  subtitle1Style.setFontSize(14)
  subtitle1Style.setFontFamily('Lato')
  subtitle1Style.setForegroundColor('#0000FF')
  subtitle1Style.setBold(true)
  subtitle1.setTop(100)
  subtitle1.setLeft(40)
  subtitle1.setWidth(130)

  const subtitle2 = slide.insertTextBox('Political Landscape')
  const subtitle2Style = subtitle2.getText().getTextStyle()
  subtitle2Style.setFontSize(14)
  subtitle2Style.setFontFamily('Lato')
  subtitle2Style.setForegroundColor('#0000FF')
  subtitle2Style.setBold(true)
  subtitle2.setTop(200)
  subtitle2.setLeft(40)
  subtitle2.setWidth(130)

  const subtitle3 = slide.insertTextBox('Economic Development')
  const subtitle3Style = subtitle3.getText().getTextStyle()
  subtitle3Style.setFontSize(14)
  subtitle3Style.setFontFamily('Lato')
  subtitle3Style.setForegroundColor('#0000FF')
  subtitle3Style.setBold(true)
  subtitle3.setTop(300)
  subtitle3.setLeft(40)
  subtitle3.setWidth(130)

  const subtitle4 = slide.insertTextBox('Cultural Highlights')
  const subtitle4Style = subtitle4.getText().getTextStyle()
  subtitle4Style.setFontSize(14)
  subtitle4Style.setFontFamily('Lato')
  subtitle4Style.setForegroundColor('#0000FF')
  subtitle4Style.setBold(true)
  subtitle4.setTop(100)
  subtitle4.setLeft(370)
  subtitle4.setWidth(130)

   const subtitle5 = slide.insertTextBox('Technological Advancements')
  const subtitle5Style = subtitle5.getText().getTextStyle()
  subtitle5Style.setFontSize(14)
  subtitle5Style.setFontFamily('Lato')
  subtitle5Style.setForegroundColor('#0000FF')
  subtitle5Style.setBold(true)
  subtitle5.setTop(200)
  subtitle5.setLeft(370)
  subtitle5.setWidth(130)

   const subtitle6 = slide.insertTextBox('Social Changes')
  const subtitle6Style = subtitle6.getText().getTextStyle()
  subtitle6Style.setFontSize(14)
  subtitle6Style.setFontFamily('Lato')
  subtitle6Style.setForegroundColor('#0000FF')
  subtitle6Style.setBold(true)
  subtitle6.setTop(300)
  subtitle6.setLeft(370)
  subtitle6.setWidth(130)

}