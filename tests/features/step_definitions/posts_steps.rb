
# encoding: utf-8

Quando(/^acesso o cadastro de artigos$/) do
  @posts = PostPage.new
  @posts.load
  @posts.wait_for_cards
end

Dado(/^usuário acessa o cadastro de artigos$/) do
    @posts = PostPage.new
    @posts.load
    @posts.wait_for_cards
end

Então(/^vejo uma lista de artigos cadastrados$/) do
  @posts.cards.each do |item|
    expect(
      item.text
    ).to have_content $env.upcase
  end
end

Dado(/^que eu tenho um novo artigo$/) do
  @item = {
      :title => Faker::Lorem.sentence,
      :image => Faker::LoremPixel.image("900x300"),
      :body => "#{$env.upcase} - #{Faker::Lorem.paragraph}"
  }
end

Quando(/^faço o cadastro desse artigo$/) do
  @posts.add.click
  @posts.title.set @item[:title]
  @posts.image.set @item[:image]
  @posts.body.set @item[:body]
  @posts.save.click
end

Então(/^vejo o toaster com a mensagem "([^"]*)"$/) do |message|
  expect(@posts.toast_sucess.text).to have_content message
end
