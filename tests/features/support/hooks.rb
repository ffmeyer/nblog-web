After do |scenario|
    filename = scenario.name.gsub(' ', '_')

    target = "reports/shots/#{filename.downcase!}.png"

    page.save_screenshot (target)
    embed(target, 'image/png', 'Clique aqui')
end 