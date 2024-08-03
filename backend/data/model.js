const { Pool } = requiew('pg');

const pool = new Pool({
  connectionString:
    'postgresql://postgres.djztbiwynadhoawnjubl:redlippedbatfish@aws-0-us-east-1.pooler.supabase.com:6543/postgres',
});

/*

const { data, error } = await supabase
.from('Response History')
.insert({ requestType: , longitude: , latitude: , response: , date: })
.select()
*/

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
