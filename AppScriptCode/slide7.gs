function myFunction() {
  const presentation = SlidesApp.create("Blue Lines");
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


    const info1  = slide.insertTextBox('Kargil War between India and Pakistan took place in 1999.')
  const info1Style = info1.getText().getTextStyle()
  info1Style.setFontSize(11)
  info1Style.setFontFamily('Inter')
  info1Style.setForegroundColor('#000000')
  info1.setTop(95)
  info1.setLeft(60)
  info1.setWidth(280)



  
  const info2  = slide.insertTextBox('Indian cricket team won the Asian Test Championship in 1999.')
  const info2Style = info2.getText().getTextStyle()
  info2Style.setFontSize(11)
  info2Style.setFontFamily('Inter')
  info2Style.setForegroundColor('#000000')
  info2.setTop(205)
  info2.setLeft(60)
  info2.setWidth(280)


    const info3  = slide.insertTextBox("Atal Bihari Vajpayee became the Prime Minister of India.")
  const info3Style = info3.getText().getTextStyle()
  info3Style.setFontSize(11)
  info3Style.setFontFamily('Inter')
  info3Style.setForegroundColor('#000000')
  info3.setTop(95)
  info3.setLeft(355)
  info3.setWidth(280)



    const info4  = slide.insertTextBox("India's population crossed the 1 billion mark in 1999.")
  const info4Style = info4.getText().getTextStyle()
  info4Style.setFontSize(11)
  info4Style.setFontFamily('Inter')
  info4Style.setForegroundColor('#000000')
  info4.setTop(205)
  info4.setLeft(355)
  info4.setWidth(280)

    const info5  = slide.insertTextBox("India successfully launched the first indigenously developed satellite, INSAT-2E, in April 1999.")
  const info5Style = info5.getText().getTextStyle()
  info5Style.setFontSize(11)
  info5Style.setFontFamily('Inter')
  info5Style.setForegroundColor('#000000')
  info5.setTop(315)
  info5.setLeft(60)
  info5.setWidth(280)

    const info6  = slide.insertTextBox("The Indian cricket team won the Asian Test Championship in 1999, defeating Pakistan in the final.")
  const info6Style = info6.getText().getTextStyle()
  info6Style.setFontSize(11)
  info6Style.setFontFamily('Inter')
  info6Style.setForegroundColor('#000000')
  info6.setTop(315)
  info6.setLeft(355)
  info6.setWidth(280)

const line1= slide.insertLine(SlidesApp.LineCategory.STRAIGHT,2.5, 0, 2.5, 80)
  line1.setLeft(55)
  line1.setTop(90)
  line1.setWeight(4)
  line1.getLineFill().setSolidFill('#4169E1')

const line2= slide.insertLine(SlidesApp.LineCategory.STRAIGHT,2.5, 0, 2.5, 80)
  line2.setLeft(55)
  line2.setTop(200)
  line2.setWeight(4)
  line2.getLineFill().setSolidFill('#4169E1')

  const line3= slide.insertLine(SlidesApp.LineCategory.STRAIGHT,2.5, 0, 2.5, 80)
  line3.setLeft(350)
  line3.setTop(90)
  line3.setWeight(4)
  line3.getLineFill().setSolidFill('#4169E1')

  const line4= slide.insertLine(SlidesApp.LineCategory.STRAIGHT,2.5, 0, 2.5, 80)
  line4.setLeft(350)
  line4.setTop(200)
  line4.setWeight(4)
  line4.getLineFill().setSolidFill('#4169E1')

const line5= slide.insertLine(SlidesApp.LineCategory.STRAIGHT,2.5, 0, 2.5, 80)
  line5.setLeft(55)
  line5.setTop(310)
  line5.setWeight(4)
  line5.getLineFill().setSolidFill('#4169E1')

  const line6= slide.insertLine(SlidesApp.LineCategory.STRAIGHT,2.5, 0, 2.5, 80)
  line6.setLeft(350)
  line6.setTop(310)
  line6.setWeight(4)
  line6.getLineFill().setSolidFill('#4169E1')
}