function grantAccess(job)  {
  return job === 'police' ? true : false;
}

module.exports = grantAccess;