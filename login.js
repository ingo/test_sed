/**
 * verify that this computer is authorized by the user. only called
 * once per unique login/computer
 */
function verifyComputer(opts, data, callback) {
	if (opts.skipVerify) { return callback(); }
}


