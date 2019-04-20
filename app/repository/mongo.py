import os
from pymongo import MongoClient

COLLECTION_NAME = 'what'

class MongoRepository(object):
 def __init__(self):
   mongo_url = os.environ.get('MONGO_URL')
   self.db = MongoClient(mongo_url).what

 def find_all(self, selector):
   return self.db.what.find(selector)

 def find(self, selector):
   return self.db.what.find_one(selector)

 def create(self, kudo):
   return self.db.what.insert_one(kudo)

 def update(self, selector, kudo):
   return self.db.what.replace_one(selector, kudo).modified_count

 def delete(self, selector):
   return self.db.what.delete_one(selector).deleted_count

