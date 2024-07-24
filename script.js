function toggleArticle(articleId) {
    const article = document.getElementById(articleId);
    if (article.style.display === "none" || article.style.display === "") {
        article.style.display = "block";
    } else {
        article.style.display = "none";
    }
}
