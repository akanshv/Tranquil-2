const Redis = require('ioredis');

const redisClient = new Redis({
    host: process.env.REDIS_SERVER || '127.0.0.1', // Redis server address //Convert this to 127.0.0.1 if not using docker
    port: 6379,        // Redis server port
  });

  
exports.redisClient = redisClient;

// redisClient.get(courseId, async (err, cachedData) => {
//     if (err) throw err;

// if (cachedData) {
//   return res.json(JSON.parse(cachedData));
// } else {
//   const course = await coursesSchema.findById(courseId).populate([{path :'category'},{path: 'teacher', 
//   select: '-password' },{path: 'sections'}])
//   if(!course){
//     return res.status(404).send({success: false, message: "Course not found"});
//   }
//   redisClient.setex(courseId, 3600, JSON.stringify({success: true, message: "Course fetched successfully", course: course}));
//   return res.status(200).send({success: true, message: "Course fetched successfully", course});

// }}
// )