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
 *     Initial: 2017/08/27        Tang Xiaoji
 */

'use strict';

import {storage, http} from '../utils';
import {url} from '../config';

export function getBlogList(category, onSuccess, onFailed) {
  const u = url.host + url.version + url.getBlogList.url;
  http.post(u, storage.getToken(), {
    "category": category
  }, (json) => {
    onSuccess(json);
  }, (e) => {
    onFailed();
    // console.log(e);
  });
}

export function getAllBlogList(onSuccess, onFailed) {
  const u = url.host + url.version + url.getAllBlogList.url;
  http.get(u, storage.getToken(), (json) => {
    onSuccess(json);
  }, (e) => {
    onFailed();
    // console.log(e);
  });
}

export function create(blog, onSuccess, onFailed) {
  const u = url.host + url.version + url.createBlog.url;
  http.post(u, storage.getToken(), {
    "title": blog.title,
    "category": blog.category,
    "abstract": blog.abstract,
    "tag": blog.tag,
    "content": blog.content
  }, (json) => {
    if(!json) {
      onSuccess();
    } else {
      onFailed(json);
    }
  }, (err) => {
    onFailed(err);
  })
}

export function getDetail(id, onSuccess, onFailed) {
  const u = url.host + url.version + url.getBlogDetail.url;
  http.post(u, storage.getToken(), {
    "id": parseInt(id)
  }, (json) => {
    if(json.ContentId) {
      onSuccess(json.Content);
    } else {
      onFailed(json);
    }
  }, (err) => {
    onFailed(err);
  })
}
