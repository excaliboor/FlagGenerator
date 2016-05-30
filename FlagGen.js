function FlagGenerator ()
{
	this.identifiers = {};

	this.next_flag_for_id = function (identifier) {
    // examples:
	// FG.next_flag_for_id( “AUDIO_OUTPUTS” )
	// FG.next_flag_for_id( “VIDEO_INPUT_PORTS” )
	// FG.next_flag_for_id( “ACCESS_FLAGS” )
        if (typeof (identifier) == "object")
		{
			console.error( "[FlagGenerator] Identifier must not be an object" );
			return NaN;
		}

		if (typeof (this.identifiers[identifier]) == "undefined")
			this.identifiers[identifier] = 0; // create

		return 0x1<<this.identifiers[identifier]++;
	};

	this.all = function (identifier) {
    // examples:
	// FG.all( “AUDIO_OUTPUTS” )
	// FG.all( “VIDEO_INPUT_PORTS” )
	// FG.all( “ACCESS_FLAGS” )
		return (0x1<<this.identifiers[identifier])-1;
	};
};

var FG = new FlagGenerator();
