import News from "../model/News.js"

const createNews = async (news) => await News.create(news)
const findAll = async () => await News.find()

export {createNews, findAll}