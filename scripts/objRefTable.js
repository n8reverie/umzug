const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Audio,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.SaveState,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.LoadState,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.System.Acts.SetVar
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Text: 0},
	{TextHighscore: 0},
	{Sprite2: 0},
	{TextLive: 0},
	{JA: 0},
	{Sprite3: 0},
	{Text2: 0},
	{Touch: 0},
	{Maus: 0},
	{Audio: 0},
	{Text3: 0},
	{JA2: 0},
	{Highscore: 0},
	{Lives: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	TextHighscore: class extends self.ITextInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	TextLive: class extends self.ITextInstance {},
	JA: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	Maus: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Text3: class extends self.ITextInstance {},
	JA2: class extends self.ISpriteInstance {}
}