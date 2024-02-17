function createPresentationWithBulletPoints() {
  var presentation = SlidesApp.create('New Presentation');
  var slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);

  // Clear existing shapes
  slide.getShapes().forEach(function (shape) {
    shape.remove();
  });

  const title2 = slide.insertTextBox('Indian History')
  const titleStyle2 = title2.getText().getTextStyle()
  titleStyle2.setBold(true)
  titleStyle2.setForegroundColor('#000000')
  titleStyle2.setFontSize(24)
  titleStyle2.setFontFamily('Lato')
  title2.setTop(30)
  title2.setLeft(45)
  title2.setWidth(650)

  const image = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
  image.setTop(100)
  image.setLeft(60)
  image.setWidth(20)
  image.setHeight(20)

  const description = slide.insertTextBox('Kargil War between India and Pakistan took place, leading to significant military conflict in the region.')
  const descStyle = description.getText().getTextStyle()
  description.setTop(90)
  description.setLeft(120) // Adjusted Left position
  description.setWidth(380)
  descStyle.setForegroundColor('#000000')
  descStyle.setFontSize(11)
  descStyle.setFontFamily('Lato')

  const image2 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
  image2.setTop(170)
  image2.setLeft(60)
  image2.setWidth(20)
  image2.setHeight(20)

  const description2 = slide.insertTextBox("Atal Bihari Vajpayee served as the Prime Minister of India during this period, implementing various economic and political reforms")
  const descStyle2 = description2.getText().getTextStyle()
  description2.setTop(160)
  description2.setLeft(120) // Adjusted Left position
  description2.setWidth(380)
  descStyle2.setForegroundColor('#000000')
  descStyle2.setFontSize(11)
  descStyle2.setFontFamily('Lato')

  const image3 = slide.insertImage('https://img.icons8.com/?size=32&id=77258&format=png')
  image3.setTop(250)
  image3.setLeft(60)
  image3.setWidth(20)
  image3.setHeight(20)

  const description3 = slide.insertTextBox("India's population reached approximately 1 billion people in 1999, marking a significant demographic milestone for the country.")
  const descStyle3 = description3.getText().getTextStyle()
  description3.setTop(240)
  description3.setLeft(120) // Adjusted Left position
  description3.setWidth(380)
  descStyle3.setForegroundColor('#000000')
  descStyle3.setFontSize(11)
  descStyle3.setFontFamily('Lato')
}