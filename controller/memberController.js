const jwt = require('jsonwebtoken');
require('dotenv').config();
const sql = require('../utils/db');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

module.exports.register = async (req, res, next) => {
  const validateResult = validationResult(req);
  if (!validateResult.isEmpty()) {
    return res.json({ status: 'error', msg: '註冊表單資料格式不正確' });
  }
  try {
    const { name, password } = req.body;
    const member = await sql.execute('select * from member where  name=?', [
      name,
    ]);
    if (member.length > 0) return res.json({ msg: '已經註冊過了' });
    await sql.execute('INSERT INTO member (name, password) VALUES(?,?)', [
      name,
      await bcrypt.hash(password, 10),
    ]);
    res.status(200).json({ status: 'success' });
  } catch (error) {
    next(new Error('register錯誤'));
  }
};

module.exports.login = async (req, res, next) => {
  const validateResult = validationResult(req);
  if (!validateResult.isEmpty()) {
    return res.json({ msg: '登入表單格式不正確' });
  }
  try {
    const { name, password } = req.body;
    const token = jwt.sign({ name, password }, process.env.TOKEN_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    next(new Error('login錯誤'));
  }
};
