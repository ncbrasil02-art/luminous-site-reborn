import { newsData } from './src/lib/news.data';
import { expect, test } from 'vitest';

test('newsData is valid', () => {
  expect(newsData).toBeDefined();
  expect(Array.isArray(newsData)).toBe(true);
  expect(newsData.length).toBeGreaterThan(0);
  
  const firstPost = newsData[0];
  expect(firstPost).toHaveProperty('id');
  expect(firstPost).toHaveProperty('title');
  expect(firstPost).toHaveProperty('slug');
  expect(firstPost).toHaveProperty('content');
});
