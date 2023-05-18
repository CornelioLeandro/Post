import News from '../model/News.js';

const createNews = async (news) => await News.create(news);

const findAll = async (offset, limit) => await News.find().sort({_id: -1}).skip(offset).limit(limit).populate('user');

const countNews = async () => await News.countDocuments();

export {createNews, findAll, countNews};