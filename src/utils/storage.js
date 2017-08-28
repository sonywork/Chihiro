/*
 * MIT License
 *
 * Copyright (c) 2017 SmartestEE Co,Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2017/08/06        Tang Xiaoji
 */

'use strict';

const config = {
  STORAGE_INTERVAL: 5 * 1000
};

function saveData(title, abstract, category, tags, content) {
  sessionStorage.setItem('title', title);
  sessionStorage.setItem('abstract', abstract);
  sessionStorage.setItem('cate', category);
  sessionStorage.setItem('tags', tags);
  sessionStorage.setItem('content', content);
}

function getData() {
  return {
    title: sessionStorage.getItem('title'),
    abstract: sessionStorage.getItem('abstract'),
    cate: sessionStorage.getItem('cate'),
    tags: sessionStorage.getItem('tags'),
    content: sessionStorage.getItem('content')
  }
}

function saveToken(token) {
  sessionStorage.setItem('token', token);
}

function getToken() {
  return sessionStorage.getItem('token');
}

function removeToken() {
  sessionStorage.setItem('token', '');
}

export const storage = {
  ...config,

  saveData,
  getData,

  saveToken,
  getToken,

  removeToken
};
