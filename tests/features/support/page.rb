
class PostPage < SitePrism::Page
    set_url '/admin/posts'
    elements :cards, '.post' 

end
