# encoding: utf-8
Quando(/^acesso o cadastro de artigos$/) do
  @posts = PostPage.new
  @posts.load
  @posts.wait_for_cards
  visit '/admin/posts'
end

Então(/^vejo uma lista de artigos cadastrados$/) do
  @posts.cards.each do |item|
    expect(
      item.text
    ).to have_content $env.upcase
  end
end
