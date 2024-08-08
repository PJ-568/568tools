var avif_enc = (function () {
	var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
	if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
	return (
		function (avif_enc) {
			avif_enc = avif_enc || {};


			var f;
			f || (f = typeof avif_enc !== 'undefined' ? avif_enc : {});
			var aa, ba;
			f.ready = new Promise(function (a, b) {
				aa = a;
				ba = b
			});
			var ca = {},
				m;
			for (m in f) f.hasOwnProperty(m) && (ca[m] = f[m]);
			var da = !1,
				r = !1,
				ea = !1,
				fa = !1;
			da = "object" === typeof window;
			r = "function" === typeof importScripts;
			ea = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
			fa = !da && !ea && !r;
			var u = "",
				ha, ia, ja, ka;
			if (ea) u = r ? require("path").dirname(u) + "/" : __dirname + "/", ha = function (a, b) {
				ja || (ja = require("fs"));
				ka || (ka = require("path"));
				a = ka.normalize(a);
				return ja.readFileSync(a, b ? null : "utf8")
			}, ia = function (a) {
				a = ha(a, !0);
				a.buffer || (a = new Uint8Array(a));
				assert(a.buffer);
				return a
			}, 1 < process.argv.length && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function (a) {
				throw a;
			}), process.on("unhandledRejection", x), f.inspect = function () {
				return "[Emscripten Module object]"
			};
			else if (fa) "undefined" !=
				typeof read && (ha = function (a) {
					return read(a)
				}), ia = function (a) {
					if ("function" === typeof readbuffer) return new Uint8Array(readbuffer(a));
					a = read(a, "binary");
					assert("object" === typeof a);
					return a
				}, "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print);
			else if (da || r) r ? u = self.location.href : document.currentScript && (u = document.currentScript.src), _scriptDir && (u = _scriptDir), 0 !== u.indexOf("blob:") ? u = u.substr(0,
				u.lastIndexOf("/") + 1) : u = "", ha = function (a) {
				var b = new XMLHttpRequest;
				b.open("GET", a, !1);
				b.send(null);
				return b.responseText
			}, r && (ia = function (a) {
				var b = new XMLHttpRequest;
				b.open("GET", a, !1);
				b.responseType = "arraybuffer";
				b.send(null);
				return new Uint8Array(b.response)
			});
			var la = f.print || console.log.bind(console),
				z = f.printErr || console.warn.bind(console);
			for (m in ca) ca.hasOwnProperty(m) && (f[m] = ca[m]);
			ca = null;
			var ma = 0,
				na;
			f.wasmBinary && (na = f.wasmBinary);
			var noExitRuntime;
			f.noExitRuntime && (noExitRuntime = f.noExitRuntime);
			"object" !== typeof WebAssembly && x("no native wasm support detected");
			var A, oa = new WebAssembly.Table({
					initial: 901,
					maximum: 901,
					element: "anyfunc"
				}),
				pa = !1;

			function assert(a, b) {
				a || x("Assertion failed: " + b)
			}
			var qa = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;

			function B(a, b, c) {
				var d = b + c;
				for (c = b; a[c] && !(c >= d);) ++c;
				if (16 < c - b && a.subarray && qa) return qa.decode(a.subarray(b, c));
				for (d = ""; b < c;) {
					var e = a[b++];
					if (e & 128) {
						var g = a[b++] & 63;
						if (192 == (e & 224)) d += String.fromCharCode((e & 31) << 6 | g);
						else {
							var h = a[b++] & 63;
							e = 224 == (e & 240) ? (e & 15) << 12 | g << 6 | h : (e & 7) << 18 | g << 12 | h << 6 | a[b++] & 63;
							65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
						}
					} else d += String.fromCharCode(e)
				}
				return d
			}

			function sa(a, b, c, d) {
				if (!(0 < d)) return 0;
				var e = c;
				d = c + d - 1;
				for (var g = 0; g < a.length; ++g) {
					var h = a.charCodeAt(g);
					if (55296 <= h && 57343 >= h) {
						var k = a.charCodeAt(++g);
						h = 65536 + ((h & 1023) << 10) | k & 1023
					}
					if (127 >= h) {
						if (c >= d) break;
						b[c++] = h
					} else {
						if (2047 >= h) {
							if (c + 1 >= d) break;
							b[c++] = 192 | h >> 6
						} else {
							if (65535 >= h) {
								if (c + 2 >= d) break;
								b[c++] = 224 | h >> 12
							} else {
								if (c + 3 >= d) break;
								b[c++] = 240 | h >> 18;
								b[c++] = 128 | h >> 12 & 63
							}
							b[c++] = 128 | h >> 6 & 63
						}
						b[c++] = 128 | h & 63
					}
				}
				b[c] = 0;
				return c - e
			}

			function ta(a) {
				for (var b = 0, c = 0; c < a.length; ++c) {
					var d = a.charCodeAt(c);
					55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
					127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4
				}
				return b
			}
			var ua = "undefined" !== typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

			function va(a, b) {
				var c = a >> 1;
				for (var d = c + b / 2; !(c >= d) && wa[c];) ++c;
				c <<= 1;
				if (32 < c - a && ua) return ua.decode(C.subarray(a, c));
				c = 0;
				for (d = "";;) {
					var e = E[a + 2 * c >> 1];
					if (0 == e || c == b / 2) return d;
					++c;
					d += String.fromCharCode(e)
				}
			}

			function xa(a, b, c) {
				void 0 === c && (c = 2147483647);
				if (2 > c) return 0;
				c -= 2;
				var d = b;
				c = c < 2 * a.length ? c / 2 : a.length;
				for (var e = 0; e < c; ++e) E[b >> 1] = a.charCodeAt(e), b += 2;
				E[b >> 1] = 0;
				return b - d
			}

			function ya(a) {
				return 2 * a.length
			}

			function za(a, b) {
				for (var c = 0, d = ""; !(c >= b / 4);) {
					var e = F[a + 4 * c >> 2];
					if (0 == e) break;
					++c;
					65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : d += String.fromCharCode(e)
				}
				return d
			}

			function Aa(a, b, c) {
				void 0 === c && (c = 2147483647);
				if (4 > c) return 0;
				var d = b;
				c = d + c - 4;
				for (var e = 0; e < a.length; ++e) {
					var g = a.charCodeAt(e);
					if (55296 <= g && 57343 >= g) {
						var h = a.charCodeAt(++e);
						g = 65536 + ((g & 1023) << 10) | h & 1023
					}
					F[b >> 2] = g;
					b += 4;
					if (b + 4 > c) break
				}
				F[b >> 2] = 0;
				return b - d
			}

			function Ba(a) {
				for (var b = 0, c = 0; c < a.length; ++c) {
					var d = a.charCodeAt(c);
					55296 <= d && 57343 >= d && ++c;
					b += 4
				}
				return b
			}
			var G, H, C, E, wa, F, I, Ca, Da;

			function Ea(a) {
				G = a;
				f.HEAP8 = H = new Int8Array(a);
				f.HEAP16 = E = new Int16Array(a);
				f.HEAP32 = F = new Int32Array(a);
				f.HEAPU8 = C = new Uint8Array(a);
				f.HEAPU16 = wa = new Uint16Array(a);
				f.HEAPU32 = I = new Uint32Array(a);
				f.HEAPF32 = Ca = new Float32Array(a);
				f.HEAPF64 = Da = new Float64Array(a)
			}
			var Fa = f.INITIAL_MEMORY || 16777216;
			f.wasmMemory ? A = f.wasmMemory : A = new WebAssembly.Memory({
				initial: Fa / 65536,
				maximum: 32768
			});
			A && (G = A.buffer);
			Fa = G.byteLength;
			Ea(G);
			F[219592] = 6121408;

			function Ga(a) {
				for (; 0 < a.length;) {
					var b = a.shift();
					if ("function" == typeof b) b(f);
					else {
						var c = b.qb;
						"number" === typeof c ? void 0 === b.Ya ? f.dynCall_v(c) : f.dynCall_vi(c, b.Ya) : c(void 0 === b.Ya ? null : b.Ya)
					}
				}
			}
			var Ha = [],
				Ia = [],
				Ja = [],
				Ka = [];

			function La() {
				var a = f.preRun.shift();
				Ha.unshift(a)
			}
			var Ma = Math.abs,
				Na = Math.ceil,
				Oa = Math.floor,
				Pa = Math.min,
				J = 0,
				Qa = null,
				Ra = null;
			f.preloadedImages = {};
			f.preloadedAudios = {};

			function x(a) {
				if (f.onAbort) f.onAbort(a);
				z(a);
				pa = !0;
				a = new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
				ba(a);
				throw a;
			}

			function Sa(a) {
				var b = K;
				return String.prototype.startsWith ? b.startsWith(a) : 0 === b.indexOf(a)
			}

			function Ta() {
				return Sa("data:application/octet-stream;base64,")
			}
			// if (!Ta()) {
			// 	var Ua = K;
			// 	K = f.locateFile ? f.locateFile(Ua, u) : u + Ua
			// }

			function Va() {
				try {
					if (na) return new Uint8Array(na);
					if (ia) return ia(K);
					throw "both async and sync fetching of the wasm failed";
				} catch (a) {
					x(a)
				}
			}

			function Wa() {
				return na || !da && !r || "function" !== typeof fetch || Sa("file://") ? new Promise(function (a) {
					a(Va())
				}) : fetch(K, {
					credentials: "same-origin"
				}).then(function (a) {
					if (!a.ok) throw "failed to load wasm binary file at '" + K + "'";
					return a.arrayBuffer()
				}).catch(function () {
					return Va()
				})
			}
			var Xa, Ya;
			Ia.push({
				qb: function () {
					Za()
				}
			});

			function $a() {
				return 0 < $a.Va
			}

			function ab(a, b) {
				for (var c = 0, d = a.length - 1; 0 <= d; d--) {
					var e = a[d];
					"." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--)
				}
				if (b)
					for (; c; c--) a.unshift("..");
				return a
			}

			function bb(a) {
				var b = "/" === a.charAt(0),
					c = "/" === a.substr(-1);
				(a = ab(a.split("/").filter(function (d) {
					return !!d
				}), !b).join("/")) || b || (a = ".");
				a && c && (a += "/");
				return (b ? "/" : "") + a
			}

			function cb(a) {
				var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
				a = b[0];
				b = b[1];
				if (!a && !b) return ".";
				b && (b = b.substr(0, b.length - 1));
				return a + b
			}

			function db(a) {
				if ("/" === a) return "/";
				var b = a.lastIndexOf("/");
				return -1 === b ? a : a.substr(b + 1)
			}

			function eb() {
				for (var a = "", b = !1, c = arguments.length - 1; - 1 <= c && !b; c--) {
					b = 0 <= c ? arguments[c] : "/";
					if ("string" !== typeof b) throw new TypeError("Arguments to path.resolve must be strings");
					if (!b) return "";
					a = b + "/" + a;
					b = "/" === b.charAt(0)
				}
				a = ab(a.split("/").filter(function (d) {
					return !!d
				}), !b).join("/");
				return (b ? "/" : "") + a || "."
			}
			var fb = [];

			function gb(a, b) {
				fb[a] = {
					input: [],
					output: [],
					Ua: b
				};
				hb(a, ib)
			}
			var ib = {
					open: function (a) {
						var b = fb[a.node.rdev];
						if (!b) throw new L(43);
						a.tty = b;
						a.seekable = !1
					},
					close: function (a) {
						a.tty.Ua.flush(a.tty)
					},
					flush: function (a) {
						a.tty.Ua.flush(a.tty)
					},
					read: function (a, b, c, d) {
						if (!a.tty || !a.tty.Ua.jb) throw new L(60);
						for (var e = 0, g = 0; g < d; g++) {
							try {
								var h = a.tty.Ua.jb(a.tty)
							} catch (k) {
								throw new L(29);
							}
							if (void 0 === h && 0 === e) throw new L(6);
							if (null === h || void 0 === h) break;
							e++;
							b[c + g] = h
						}
						e && (a.node.timestamp = Date.now());
						return e
					},
					write: function (a, b, c, d) {
						if (!a.tty || !a.tty.Ua.$a) throw new L(60);
						try {
							for (var e = 0; e < d; e++) a.tty.Ua.$a(a.tty, b[c + e])
						} catch (g) {
							throw new L(29);
						}
						d && (a.node.timestamp = Date.now());
						return e
					}
				},
				jb = {
					jb: function (a) {
						if (!a.input.length) {
							var b = null;
							if (ea) {
								var c = Buffer.Va ? Buffer.Va(256) : new Buffer(256),
									d = 0;
								try {
									d = ja.readSync(process.stdin.fd, c, 0, 256, null)
								} catch (e) {
									if (-1 != e.toString().indexOf("EOF")) d = 0;
									else throw e;
								}
								0 < d ? b = c.slice(0, d).toString("utf-8") : b = null
							} else "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" ==
								typeof readline && (b = readline(), null !== b && (b += "\n"));
							if (!b) return null;
							c = Array(ta(b) + 1);
							b = sa(b, c, 0, c.length);
							c.length = b;
							a.input = c
						}
						return a.input.shift()
					},
					$a: function (a, b) {
						null === b || 10 === b ? (la(B(a.output, 0)), a.output = []) : 0 != b && a.output.push(b)
					},
					flush: function (a) {
						a.output && 0 < a.output.length && (la(B(a.output, 0)), a.output = [])
					}
				},
				kb = {
					$a: function (a, b) {
						null === b || 10 === b ? (z(B(a.output, 0)), a.output = []) : 0 != b && a.output.push(b)
					},
					flush: function (a) {
						a.output && 0 < a.output.length && (z(B(a.output, 0)), a.output = [])
					}
				},
				M = {
					Ma: null,
					Qa: function () {
						return M.createNode(null, "/", 16895, 0)
					},
					createNode: function (a, b, c, d) {
						if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new L(63);
						M.Ma || (M.Ma = {
							dir: {
								node: {
									Ra: M.Ja.Ra,
									Oa: M.Ja.Oa,
									lookup: M.Ja.lookup,
									Wa: M.Ja.Wa,
									rename: M.Ja.rename,
									unlink: M.Ja.unlink,
									rmdir: M.Ja.rmdir,
									readdir: M.Ja.readdir,
									symlink: M.Ja.symlink
								},
								stream: {
									Ta: M.Ka.Ta
								}
							},
							file: {
								node: {
									Ra: M.Ja.Ra,
									Oa: M.Ja.Oa
								},
								stream: {
									Ta: M.Ka.Ta,
									read: M.Ka.read,
									write: M.Ka.write,
									cb: M.Ka.cb,
									kb: M.Ka.kb,
									mb: M.Ka.mb
								}
							},
							link: {
								node: {
									Ra: M.Ja.Ra,
									Oa: M.Ja.Oa,
									readlink: M.Ja.readlink
								},
								stream: {}
							},
							eb: {
								node: {
									Ra: M.Ja.Ra,
									Oa: M.Ja.Oa
								},
								stream: lb
							}
						});
						c = mb(a, b, c, d);
						16384 === (c.mode & 61440) ? (c.Ja = M.Ma.dir.node, c.Ka = M.Ma.dir.stream, c.Ia = {}) : 32768 === (c.mode & 61440) ? (c.Ja = M.Ma.file.node, c.Ka = M.Ma.file.stream, c.La = 0, c.Ia = null) : 40960 === (c.mode & 61440) ? (c.Ja = M.Ma.link.node, c.Ka = M.Ma.link.stream) : 8192 === (c.mode & 61440) && (c.Ja = M.Ma.eb.node, c.Ka = M.Ma.eb.stream);
						c.timestamp = Date.now();
						a && (a.Ia[b] = c);
						return c
					},
					Hb: function (a) {
						if (a.Ia && a.Ia.subarray) {
							for (var b = [], c = 0; c < a.La; ++c) b.push(a.Ia[c]);
							return b
						}
						return a.Ia
					},
					Ib: function (a) {
						return a.Ia ? a.Ia.subarray ? a.Ia.subarray(0, a.La) : new Uint8Array(a.Ia) : new Uint8Array(0)
					},
					fb: function (a, b) {
						var c = a.Ia ? a.Ia.length : 0;
						c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.Ia, a.Ia = new Uint8Array(b), 0 < a.La && a.Ia.set(c.subarray(0, a.La), 0))
					},
					Ab: function (a, b) {
						if (a.La != b)
							if (0 == b) a.Ia = null, a.La = 0;
							else {
								if (!a.Ia || a.Ia.subarray) {
									var c = a.Ia;
									a.Ia = new Uint8Array(b);
									c && a.Ia.set(c.subarray(0, Math.min(b, a.La)))
								} else if (a.Ia || (a.Ia = []), a.Ia.length > b) a.Ia.length = b;
								else
									for (; a.Ia.length < b;) a.Ia.push(0);
								a.La = b
							}
					},
					Ja: {
						Ra: function (a) {
							var b = {};
							b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
							b.ino = a.id;
							b.mode = a.mode;
							b.nlink = 1;
							b.uid = 0;
							b.gid = 0;
							b.rdev = a.rdev;
							16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.La : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
							b.atime = new Date(a.timestamp);
							b.mtime = new Date(a.timestamp);
							b.ctime = new Date(a.timestamp);
							b.ob = 4096;
							b.blocks = Math.ceil(b.size / b.ob);
							return b
						},
						Oa: function (a, b) {
							void 0 !== b.mode && (a.mode = b.mode);
							void 0 !== b.timestamp &&
								(a.timestamp = b.timestamp);
							void 0 !== b.size && M.Ab(a, b.size)
						},
						lookup: function () {
							throw nb[44];
						},
						Wa: function (a, b, c, d) {
							return M.createNode(a, b, c, d)
						},
						rename: function (a, b, c) {
							if (16384 === (a.mode & 61440)) {
								try {
									var d = ob(b, c)
								} catch (g) {}
								if (d)
									for (var e in d.Ia) throw new L(55);
							}
							delete a.parent.Ia[a.name];
							a.name = c;
							b.Ia[c] = a;
							a.parent = b
						},
						unlink: function (a, b) {
							delete a.Ia[b]
						},
						rmdir: function (a, b) {
							var c = ob(a, b),
								d;
							for (d in c.Ia) throw new L(55);
							delete a.Ia[b]
						},
						readdir: function (a) {
							var b = [".", ".."],
								c;
							for (c in a.Ia) a.Ia.hasOwnProperty(c) &&
								b.push(c);
							return b
						},
						symlink: function (a, b, c) {
							a = M.createNode(a, b, 41471, 0);
							a.link = c;
							return a
						},
						readlink: function (a) {
							if (40960 !== (a.mode & 61440)) throw new L(28);
							return a.link
						}
					},
					Ka: {
						read: function (a, b, c, d, e) {
							var g = a.node.Ia;
							if (e >= a.node.La) return 0;
							a = Math.min(a.node.La - e, d);
							if (8 < a && g.subarray) b.set(g.subarray(e, e + a), c);
							else
								for (d = 0; d < a; d++) b[c + d] = g[e + d];
							return a
						},
						write: function (a, b, c, d, e, g) {
							b.buffer === H.buffer && (g = !1);
							if (!d) return 0;
							a = a.node;
							a.timestamp = Date.now();
							if (b.subarray && (!a.Ia || a.Ia.subarray)) {
								if (g) return a.Ia =
									b.subarray(c, c + d), a.La = d;
								if (0 === a.La && 0 === e) return a.Ia = b.slice(c, c + d), a.La = d;
								if (e + d <= a.La) return a.Ia.set(b.subarray(c, c + d), e), d
							}
							M.fb(a, e + d);
							if (a.Ia.subarray && b.subarray) a.Ia.set(b.subarray(c, c + d), e);
							else
								for (g = 0; g < d; g++) a.Ia[e + g] = b[c + g];
							a.La = Math.max(a.La, e + d);
							return d
						},
						Ta: function (a, b, c) {
							1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.La);
							if (0 > b) throw new L(28);
							return b
						},
						cb: function (a, b, c) {
							M.fb(a.node, b + c);
							a.node.La = Math.max(a.node.La, b + c)
						},
						kb: function (a, b, c, d, e, g) {
							assert(0 ===
								b);
							if (32768 !== (a.node.mode & 61440)) throw new L(43);
							a = a.node.Ia;
							if (g & 2 || a.buffer !== G) {
								if (0 < d || d + c < a.length) a.subarray ? a = a.subarray(d, d + c) : a = Array.prototype.slice.call(a, d, d + c);
								d = !0;
								g = 16384 * Math.ceil(c / 16384);
								for (b = pb(g); c < g;) H[b + c++] = 0;
								c = b;
								if (!c) throw new L(48);
								H.set(a, c)
							} else d = !1, c = a.byteOffset;
							return {
								Mb: c,
								Gb: d
							}
						},
						mb: function (a, b, c, d, e) {
							if (32768 !== (a.node.mode & 61440)) throw new L(43);
							if (e & 2) return 0;
							M.Ka.write(a, b, 0, d, c, !1);
							return 0
						}
					}
				},
				qb = null,
				rb = {},
				sb = [],
				tb = 1,
				ub = null,
				vb = !0,
				wb = {},
				L = null,
				nb = {};

			function N(a, b) {
				a = eb("/", a);
				b = b || {};
				if (!a) return {
					path: "",
					node: null
				};
				var c = {
						ib: !0,
						ab: 0
					},
					d;
				for (d in c) void 0 === b[d] && (b[d] = c[d]);
				if (8 < b.ab) throw new L(32);
				a = ab(a.split("/").filter(function (h) {
					return !!h
				}), !1);
				var e = qb;
				c = "/";
				for (d = 0; d < a.length; d++) {
					var g = d === a.length - 1;
					if (g && b.parent) break;
					e = ob(e, a[d]);
					c = bb(c + "/" + a[d]);
					e.Xa && (!g || g && b.ib) && (e = e.Xa.root);
					if (!g || b.hb)
						for (g = 0; 40960 === (e.mode & 61440);)
							if (e = xb(c), c = eb(cb(c), e), e = N(c, {
									ab: b.ab
								}).node, 40 < g++) throw new L(32);
				}
				return {
					path: c,
					node: e
				}
			}

			function yb(a) {
				for (var b;;) {
					if (a === a.parent) return a = a.Qa.lb, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
					b = b ? a.name + "/" + b : a.name;
					a = a.parent
				}
			}

			function zb(a, b) {
				for (var c = 0, d = 0; d < b.length; d++) c = (c << 5) - c + b.charCodeAt(d) | 0;
				return (a + c >>> 0) % ub.length
			}

			function ob(a, b) {
				var c;
				if (c = (c = Ab(a, "x")) ? c : a.Ja.lookup ? 0 : 2) throw new L(c, a);
				for (c = ub[zb(a.id, b)]; c; c = c.xb) {
					var d = c.name;
					if (c.parent.id === a.id && d === b) return c
				}
				return a.Ja.lookup(a, b)
			}

			function mb(a, b, c, d) {
				a = new Bb(a, b, c, d);
				b = zb(a.parent.id, a.name);
				a.xb = ub[b];
				return ub[b] = a
			}
			var Cb = {
				r: 0,
				rs: 1052672,
				"r+": 2,
				w: 577,
				wx: 705,
				xw: 705,
				"w+": 578,
				"wx+": 706,
				"xw+": 706,
				a: 1089,
				ax: 1217,
				xa: 1217,
				"a+": 1090,
				"ax+": 1218,
				"xa+": 1218
			};

			function Db(a) {
				var b = ["r", "w", "rw"][a & 3];
				a & 512 && (b += "w");
				return b
			}

			function Ab(a, b) {
				if (vb) return 0;
				if (-1 === b.indexOf("r") || a.mode & 292) {
					if (-1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73)) return 2
				} else return 2;
				return 0
			}

			function Eb(a, b) {
				try {
					return ob(a, b), 20
				} catch (c) {}
				return Ab(a, "wx")
			}

			function Fb(a) {
				var b = 4096;
				for (a = a || 0; a <= b; a++)
					if (!sb[a]) return a;
				throw new L(33);
			}

			function Gb(a, b) {
				Hb || (Hb = function () {}, Hb.prototype = {});
				var c = new Hb,
					d;
				for (d in a) c[d] = a[d];
				a = c;
				b = Fb(b);
				a.fd = b;
				return sb[b] = a
			}
			var lb = {
				open: function (a) {
					a.Ka = rb[a.node.rdev].Ka;
					a.Ka.open && a.Ka.open(a)
				},
				Ta: function () {
					throw new L(70);
				}
			};

			function hb(a, b) {
				rb[a] = {
					Ka: b
				}
			}

			function Ib(a, b) {
				var c = "/" === b,
					d = !b;
				if (c && qb) throw new L(10);
				if (!c && !d) {
					var e = N(b, {
						ib: !1
					});
					b = e.path;
					e = e.node;
					if (e.Xa) throw new L(10);
					if (16384 !== (e.mode & 61440)) throw new L(54);
				}
				b = {
					type: a,
					Lb: {},
					lb: b,
					wb: []
				};
				a = a.Qa(b);
				a.Qa = b;
				b.root = a;
				c ? qb = a : e && (e.Xa = b, e.Qa && e.Qa.wb.push(b))
			}

			function Jb(a, b, c) {
				var d = N(a, {
					parent: !0
				}).node;
				a = db(a);
				if (!a || "." === a || ".." === a) throw new L(28);
				var e = Eb(d, a);
				if (e) throw new L(e);
				if (!d.Ja.Wa) throw new L(63);
				return d.Ja.Wa(d, a, b, c)
			}

			function O(a) {
				Jb(a, 16895, 0)
			}

			function Kb(a, b, c) {
				"undefined" === typeof c && (c = b, b = 438);
				Jb(a, b | 8192, c)
			}

			function Lb(a, b) {
				if (!eb(a)) throw new L(44);
				var c = N(b, {
					parent: !0
				}).node;
				if (!c) throw new L(44);
				b = db(b);
				var d = Eb(c, b);
				if (d) throw new L(d);
				if (!c.Ja.symlink) throw new L(63);
				c.Ja.symlink(c, b, a)
			}

			function xb(a) {
				a = N(a).node;
				if (!a) throw new L(44);
				if (!a.Ja.readlink) throw new L(28);
				return eb(yb(a.parent), a.Ja.readlink(a))
			}

			function Mb(a, b, c, d) {
				if ("" === a) throw new L(44);
				if ("string" === typeof b) {
					var e = Cb[b];
					if ("undefined" === typeof e) throw Error("Unknown file open mode: " + b);
					b = e
				}
				c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
				if ("object" === typeof a) var g = a;
				else {
					a = bb(a);
					try {
						g = N(a, {
							hb: !(b & 131072)
						}).node
					} catch (k) {}
				}
				e = !1;
				if (b & 64)
					if (g) {
						if (b & 128) throw new L(20);
					} else g = Jb(a, c, 0), e = !0;
				if (!g) throw new L(44);
				8192 === (g.mode & 61440) && (b &= -513);
				if (b & 65536 && 16384 !== (g.mode & 61440)) throw new L(54);
				if (!e && (c = g ? 40960 === (g.mode & 61440) ?
						32 : 16384 === (g.mode & 61440) && ("r" !== Db(b) || b & 512) ? 31 : Ab(g, Db(b)) : 44)) throw new L(c);
				if (b & 512) {
					c = g;
					var h;
					"string" === typeof c ? h = N(c, {
						hb: !0
					}).node : h = c;
					if (!h.Ja.Oa) throw new L(63);
					if (16384 === (h.mode & 61440)) throw new L(31);
					if (32768 !== (h.mode & 61440)) throw new L(28);
					if (c = Ab(h, "w")) throw new L(c);
					h.Ja.Oa(h, {
						size: 0,
						timestamp: Date.now()
					})
				}
				b &= -131713;
				d = Gb({
					node: g,
					path: yb(g),
					flags: b,
					seekable: !0,
					position: 0,
					Ka: g.Ka,
					Fb: [],
					error: !1
				}, d);
				d.Ka.open && d.Ka.open(d);
				!f.logReadFiles || b & 1 || (Nb || (Nb = {}), a in Nb || (Nb[a] = 1, z("FS.trackingDelegate error on read file: " +
					a)));
				try {
					wb.onOpenFile && (g = 0, 1 !== (b & 2097155) && (g |= 1), 0 !== (b & 2097155) && (g |= 2), wb.onOpenFile(a, g))
				} catch (k) {
					z("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + k.message)
				}
				return d
			}

			function Ob(a, b, c) {
				if (null === a.fd) throw new L(8);
				if (!a.seekable || !a.Ka.Ta) throw new L(70);
				if (0 != c && 1 != c && 2 != c) throw new L(28);
				a.position = a.Ka.Ta(a, b, c);
				a.Fb = []
			}

			function Pb() {
				L || (L = function (a, b) {
					this.node = b;
					this.Bb = function (c) {
						this.Sa = c
					};
					this.Bb(a);
					this.message = "FS error"
				}, L.prototype = Error(), L.prototype.constructor = L, [44].forEach(function (a) {
					nb[a] = new L(a);
					nb[a].stack = "<generic error, no stack>"
				}))
			}
			var Qb;

			function Rb(a, b) {
				var c = 0;
				a && (c |= 365);
				b && (c |= 146);
				return c
			}

			function Sb(a, b, c) {
				a = bb("/dev/" + a);
				var d = Rb(!!b, !!c);
				Tb || (Tb = 64);
				var e = Tb++ << 8 | 0;
				hb(e, {
					open: function (g) {
						g.seekable = !1
					},
					close: function () {
						c && c.buffer && c.buffer.length && c(10)
					},
					read: function (g, h, k, l) {
						for (var n = 0, p = 0; p < l; p++) {
							try {
								var t = b()
							} catch (v) {
								throw new L(29);
							}
							if (void 0 === t && 0 === n) throw new L(6);
							if (null === t || void 0 === t) break;
							n++;
							h[k + p] = t
						}
						n && (g.node.timestamp = Date.now());
						return n
					},
					write: function (g, h, k, l) {
						for (var n = 0; n < l; n++) try {
							c(h[k + n])
						} catch (p) {
							throw new L(29);
						}
						l && (g.node.timestamp = Date.now());
						return n
					}
				});
				Kb(a, d, e)
			}
			var Tb, Q = {},
				Hb, Nb, Ub = void 0;

			function Vb() {
				Ub += 4;
				return F[Ub - 4 >> 2]
			}

			function Wb(a) {
				a = sb[a];
				if (!a) throw new L(8);
				return a
			}
			var Xb = {};

			function Yb(a) {
				for (; a.length;) {
					var b = a.pop();
					a.pop()(b)
				}
			}

			function Zb(a) {
				return this.fromWireType(I[a >> 2])
			}
			var $b = {},
				R = {},
				ac = {};

			function bc(a) {
				if (void 0 === a) return "_unknown";
				a = a.replace(/[^a-zA-Z0-9_]/g, "$");
				var b = a.charCodeAt(0);
				return 48 <= b && 57 >= b ? "_" + a : a
			}

			function cc(a, b) {
				a = bc(a);
				return (new Function("body", "return function " + a + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)
			}

			function dc(a) {
				var b = Error,
					c = cc(a, function (d) {
						this.name = a;
						this.message = d;
						d = Error(d).stack;
						void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""))
					});
				c.prototype = Object.create(b.prototype);
				c.prototype.constructor = c;
				c.prototype.toString = function () {
					return void 0 === this.message ? this.name : this.name + ": " + this.message
				};
				return c
			}
			var ec = void 0;

			function fc(a, b, c) {
				function d(k) {
					k = c(k);
					if (k.length !== a.length) throw new ec("Mismatched type converter count");
					for (var l = 0; l < a.length; ++l) S(a[l], k[l])
				}
				a.forEach(function (k) {
					ac[k] = b
				});
				var e = Array(b.length),
					g = [],
					h = 0;
				b.forEach(function (k, l) {
					R.hasOwnProperty(k) ? e[l] = R[k] : (g.push(k), $b.hasOwnProperty(k) || ($b[k] = []), $b[k].push(function () {
						e[l] = R[k];
						++h;
						h === g.length && d(e)
					}))
				});
				0 === g.length && d(e)
			}

			function hc(a) {
				switch (a) {
					case 1:
						return 0;
					case 2:
						return 1;
					case 4:
						return 2;
					case 8:
						return 3;
					default:
						throw new TypeError("Unknown type size: " + a);
				}
			}
			var ic = void 0;

			function T(a) {
				for (var b = ""; C[a];) b += ic[C[a++]];
				return b
			}
			var jc = void 0;

			function U(a) {
				throw new jc(a);
			}

			function S(a, b, c) {
				c = c || {};
				if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
				var d = b.name;
				a || U('type "' + d + '" must have a positive integer typeid pointer');
				if (R.hasOwnProperty(a)) {
					if (c.ub) return;
					U("Cannot register type '" + d + "' twice")
				}
				R[a] = b;
				delete ac[a];
				$b.hasOwnProperty(a) && (b = $b[a], delete $b[a], b.forEach(function (e) {
					e()
				}))
			}
			var kc = [],
				V = [{}, {
					value: void 0
				}, {
					value: null
				}, {
					value: !0
				}, {
					value: !1
				}];

			function lc(a) {
				4 < a && 0 === --V[a].bb && (V[a] = void 0, kc.push(a))
			}

			function mc(a) {
				switch (a) {
					case void 0:
						return 1;
					case null:
						return 2;
					case !0:
						return 3;
					case !1:
						return 4;
					default:
						var b = kc.length ? kc.pop() : V.length;
						V[b] = {
							bb: 1,
							value: a
						};
						return b
				}
			}

			function nc(a) {
				if (null === a) return "null";
				var b = typeof a;
				return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a
			}

			function oc(a, b) {
				switch (b) {
					case 2:
						return function (c) {
							return this.fromWireType(Ca[c >> 2])
						};
					case 3:
						return function (c) {
							return this.fromWireType(Da[c >> 3])
						};
					default:
						throw new TypeError("Unknown float type: " + a);
				}
			}

			function pc(a) {
				var b = Function;
				if (!(b instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof b + " which is not a function");
				var c = cc(b.name || "unknownFunctionName", function () {});
				c.prototype = b.prototype;
				c = new c;
				a = b.apply(c, a);
				return a instanceof Object ? a : c
			}

			function qc(a, b) {
				var c = f;
				if (void 0 === c[a].Na) {
					var d = c[a];
					c[a] = function () {
						c[a].Na.hasOwnProperty(arguments.length) || U("Function '" + b + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + c[a].Na + ")!");
						return c[a].Na[arguments.length].apply(this, arguments)
					};
					c[a].Na = [];
					c[a].Na[d.nb] = d
				}
			}

			function rc(a, b, c) {
				f.hasOwnProperty(a) ? ((void 0 === c || void 0 !== f[a].Na && void 0 !== f[a].Na[c]) && U("Cannot register public name '" + a + "' twice"), qc(a, a), f.hasOwnProperty(c) && U("Cannot register multiple overloads of a function with the same number of arguments (" + c + ")!"), f[a].Na[c] = b) : (f[a] = b, void 0 !== c && (f[a].Kb = c))
			}

			function sc(a, b) {
				for (var c = [], d = 0; d < a; d++) c.push(F[(b >> 2) + d]);
				return c
			}

			function tc(a, b) {
				a = T(a);
				var c = f["dynCall_" + a];
				for (var d = [], e = 1; e < a.length; ++e) d.push("a" + e);
				e = "return function dynCall_" + (a + "_" + b) + "(" + d.join(", ") + ") {\n";
				e += "    return dynCall(rawFunction" + (d.length ? ", " : "") + d.join(", ") + ");\n";
				c = (new Function("dynCall", "rawFunction", e + "};\n"))(c, b);
				"function" !== typeof c && U("unknown function pointer with signature " + a + ": " + b);
				return c
			}
			var uc = void 0;

			function vc(a) {
				a = wc(a);
				var b = T(a);
				W(a);
				return b
			}

			function xc(a, b) {
				function c(g) {
					e[g] || R[g] || (ac[g] ? ac[g].forEach(c) : (d.push(g), e[g] = !0))
				}
				var d = [],
					e = {};
				b.forEach(c);
				throw new uc(a + ": " + d.map(vc).join([", "]));
			}

			function yc(a, b, c) {
				switch (b) {
					case 0:
						return c ? function (d) {
							return H[d]
						} : function (d) {
							return C[d]
						};
					case 1:
						return c ? function (d) {
							return E[d >> 1]
						} : function (d) {
							return wa[d >> 1]
						};
					case 2:
						return c ? function (d) {
							return F[d >> 2]
						} : function (d) {
							return I[d >> 2]
						};
					default:
						throw new TypeError("Unknown integer type: " + a);
				}
			}
			var zc = {};

			function Ac() {
				return "object" === typeof globalThis ? globalThis : Function("return this")()
			}

			function Bc(a, b) {
				var c = R[a];
				void 0 === c && U(b + " has unknown type " + vc(a));
				return c
			}
			var Cc = {};

			function Bb(a, b, c, d) {
				a || (a = this);
				this.parent = a;
				this.Qa = a.Qa;
				this.Xa = null;
				this.id = tb++;
				this.name = b;
				this.mode = c;
				this.Ja = {};
				this.Ka = {};
				this.rdev = d
			}
			Object.defineProperties(Bb.prototype, {
				read: {
					get: function () {
						return 365 === (this.mode & 365)
					},
					set: function (a) {
						a ? this.mode |= 365 : this.mode &= -366
					}
				},
				write: {
					get: function () {
						return 146 === (this.mode & 146)
					},
					set: function (a) {
						a ? this.mode |= 146 : this.mode &= -147
					}
				}
			});
			Pb();
			ub = Array(4096);
			Ib(M, "/");
			O("/tmp");
			O("/home");
			O("/home/web_user");
			(function () {
				O("/dev");
				hb(259, {
					read: function () {
						return 0
					},
					write: function (d, e, g, h) {
						return h
					}
				});
				Kb("/dev/null", 259);
				gb(1280, jb);
				gb(1536, kb);
				Kb("/dev/tty", 1280);
				Kb("/dev/tty1", 1536);
				if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
					var a = new Uint8Array(1);
					var b = function () {
						crypto.getRandomValues(a);
						return a[0]
					}
				} else if (ea) try {
					var c = require("crypto");
					b = function () {
						return c.randomBytes(1)[0]
					}
				} catch (d) {}
				b || (b = function () {
					x("random_device")
				});
				Sb("random", b);
				Sb("urandom", b);
				O("/dev/shm");
				O("/dev/shm/tmp")
			})();
			O("/proc");
			O("/proc/self");
			O("/proc/self/fd");
			Ib({
				Qa: function () {
					var a = mb("/proc/self", "fd", 16895, 73);
					a.Ja = {
						lookup: function (b, c) {
							var d = sb[+c];
							if (!d) throw new L(8);
							b = {
								parent: null,
								Qa: {
									lb: "fake"
								},
								Ja: {
									readlink: function () {
										return d.path
									}
								}
							};
							return b.parent = b
						}
					};
					return a
				}
			}, "/proc/self/fd");
			ec = f.InternalError = dc("InternalError");
			for (var Dc = Array(256), Ec = 0; 256 > Ec; ++Ec) Dc[Ec] = String.fromCharCode(Ec);
			ic = Dc;
			jc = f.BindingError = dc("BindingError");
			f.count_emval_handles = function () {
				for (var a = 0, b = 5; b < V.length; ++b) void 0 !== V[b] && ++a;
				return a
			};
			f.get_first_emval = function () {
				for (var a = 5; a < V.length; ++a)
					if (void 0 !== V[a]) return V[a];
				return null
			};
			uc = f.UnboundTypeError = dc("UnboundTypeError");
			var Qc = {
				w: function (a) {
					return pb(a)
				},
				T: function () {},
				R: function (a) {
					"uncaught_exception" in $a ? $a.Va++ : $a.Va = 1;
					throw a;
				},
				p: function (a, b, c) {
					Ub = c;
					try {
						var d = Wb(a);
						switch (b) {
							case 0:
								var e = Vb();
								return 0 > e ? -28 : Mb(d.path, d.flags, 0, e).fd;
							case 1:
							case 2:
								return 0;
							case 3:
								return d.flags;
							case 4:
								return e = Vb(), d.flags |= e, 0;
							case 12:
								return e = Vb(), E[e + 0 >> 1] = 2, 0;
							case 13:
							case 14:
								return 0;
							case 16:
							case 8:
								return -28;
							case 9:
								return F[Fc() >> 2] = 28, -1;
							default:
								return -28
						}
					} catch (g) {
						return "undefined" !== typeof Q && g instanceof L || x(g), -g.Sa
					}
				},
				K: function (a, b, c) {
					Ub = c;
					try {
						var d = Wb(a);
						switch (b) {
							case 21509:
							case 21505:
								return d.tty ? 0 : -59;
							case 21510:
							case 21511:
							case 21512:
							case 21506:
							case 21507:
							case 21508:
								return d.tty ? 0 : -59;
							case 21519:
								if (!d.tty) return -59;
								var e = Vb();
								return F[e >> 2] = 0;
							case 21520:
								return d.tty ? -28 : -59;
							case 21531:
								a = e = Vb();
								if (!d.Ka.vb) throw new L(59);
								return d.Ka.vb(d, b, a);
							case 21523:
								return d.tty ? 0 : -59;
							case 21524:
								return d.tty ? 0 : -59;
							default:
								x("bad ioctl syscall " + b)
						}
					} catch (g) {
						return "undefined" !== typeof Q && g instanceof L || x(g), -g.Sa
					}
				},
				L: function (a,
					b, c) {
					Ub = c;
					try {
						var d = a ? B(C, a, void 0) : "",
							e = Vb();
						return Mb(d, b, e).fd
					} catch (g) {
						return "undefined" !== typeof Q && g instanceof L || x(g), -g.Sa
					}
				},
				A: function (a) {
					var b = Xb[a];
					delete Xb[a];
					var c = b.yb,
						d = b.zb,
						e = b.gb,
						g = e.map(function (h) {
							return h.tb
						}).concat(e.map(function (h) {
							return h.Db
						}));
					fc([a], g, function (h) {
						var k = {};
						e.forEach(function (l, n) {
							var p = h[n],
								t = l.rb,
								v = l.sb,
								w = h[n + e.length],
								q = l.Cb,
								D = l.Eb;
							k[l.pb] = {
								read: function (y) {
									return p.fromWireType(t(v, y))
								},
								write: function (y, P) {
									var ra = [];
									q(D, y, w.toWireType(ra, P));
									Yb(ra)
								}
							}
						});
						return [{
							name: b.name,
							fromWireType: function (l) {
								var n = {},
									p;
								for (p in k) n[p] = k[p].read(l);
								d(l);
								return n
							},
							toWireType: function (l, n) {
								for (var p in k)
									if (!(p in n)) throw new TypeError('Missing field:  "' + p + '"');
								var t = c();
								for (p in k) k[p].write(t, n[p]);
								null !== l && l.push(d, t);
								return t
							},
							argPackAdvance: 8,
							readValueFromPointer: Zb,
							Pa: d
						}]
					})
				},
				N: function (a, b, c, d, e) {
					var g = hc(c);
					b = T(b);
					S(a, {
						name: b,
						fromWireType: function (h) {
							return !!h
						},
						toWireType: function (h, k) {
							return k ? d : e
						},
						argPackAdvance: 8,
						readValueFromPointer: function (h) {
							if (1 ===
								c) var k = H;
							else if (2 === c) k = E;
							else if (4 === c) k = F;
							else throw new TypeError("Unknown boolean type size: " + b);
							return this.fromWireType(k[h >> g])
						},
						Pa: null
					})
				},
				M: function (a, b) {
					b = T(b);
					S(a, {
						name: b,
						fromWireType: function (c) {
							var d = V[c].value;
							lc(c);
							return d
						},
						toWireType: function (c, d) {
							return mc(d)
						},
						argPackAdvance: 8,
						readValueFromPointer: Zb,
						Pa: null
					})
				},
				s: function (a, b, c) {
					c = hc(c);
					b = T(b);
					S(a, {
						name: b,
						fromWireType: function (d) {
							return d
						},
						toWireType: function (d, e) {
							if ("number" !== typeof e && "boolean" !== typeof e) throw new TypeError('Cannot convert "' +
								nc(e) + '" to ' + this.name);
							return e
						},
						argPackAdvance: 8,
						readValueFromPointer: oc(b, c),
						Pa: null
					})
				},
				y: function (a, b, c, d, e, g) {
					var h = sc(b, c);
					a = T(a);
					e = tc(d, e);
					rc(a, function () {
						xc("Cannot call " + a + " due to unbound types", h)
					}, b - 1);
					fc([], h, function (k) {
						var l = [k[0], null].concat(k.slice(1)),
							n = k = a,
							p = e,
							t = l.length;
						2 > t && U("argTypes array size mismatch! Must at least get return value and 'this' types!");
						for (var v = null !== l[1] && !1, w = !1, q = 1; q < l.length; ++q)
							if (null !== l[q] && void 0 === l[q].Pa) {
								w = !0;
								break
							} var D = "void" !== l[0].name,
							y = "",
							P = "";
						for (q = 0; q < t - 2; ++q) y += (0 !== q ? ", " : "") + "arg" + q, P += (0 !== q ? ", " : "") + "arg" + q + "Wired";
						n = "return function " + bc(n) + "(" + y + ") {\nif (arguments.length !== " + (t - 2) + ") {\nthrowBindingError('function " + n + " called with ' + arguments.length + ' arguments, expected " + (t - 2) + " args!');\n}\n";
						w && (n += "var destructors = [];\n");
						var ra = w ? "destructors" : "null";
						y = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
						p = [U, p, g, Yb, l[0], l[1]];
						v && (n += "var thisWired = classParam.toWireType(" + ra + ", this);\n");
						for (q = 0; q < t - 2; ++q) n += "var arg" + q + "Wired = argType" + q + ".toWireType(" + ra + ", arg" + q + "); // " + l[q + 2].name + "\n", y.push("argType" + q), p.push(l[q + 2]);
						v && (P = "thisWired" + (0 < P.length ? ", " : "") + P);
						n += (D ? "var rv = " : "") + "invoker(fn" + (0 < P.length ? ", " : "") + P + ");\n";
						if (w) n += "runDestructors(destructors);\n";
						else
							for (q = v ? 1 : 2; q < l.length; ++q) t = 1 === q ? "thisWired" : "arg" + (q - 2) + "Wired", null !== l[q].Pa && (n += t + "_dtor(" + t + "); // " + l[q].name + "\n", y.push(t + "_dtor"), p.push(l[q].Pa));
						D && (n += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
						y.push(n + "}\n");
						l = pc(y).apply(null, p);
						q = b - 1;
						if (!f.hasOwnProperty(k)) throw new ec("Replacing nonexistant public symbol");
						void 0 !== f[k].Na && void 0 !== q ? f[k].Na[q] = l : (f[k] = l, f[k].nb = q);
						return []
					})
				},
				i: function (a, b, c, d, e) {
					function g(n) {
						return n
					}
					b = T(b); - 1 === e && (e = 4294967295);
					var h = hc(c);
					if (0 === d) {
						var k = 32 - 8 * c;
						g = function (n) {
							return n << k >>> k
						}
					}
					var l = -1 != b.indexOf("unsigned");
					S(a, {
						name: b,
						fromWireType: g,
						toWireType: function (n, p) {
							if ("number" !== typeof p && "boolean" !== typeof p) throw new TypeError('Cannot convert "' +
								nc(p) + '" to ' + this.name);
							if (p < d || p > e) throw new TypeError('Passing a number "' + nc(p) + '" from JS side to C/C++ side to an argument of type "' + b + '", which is outside the valid range [' + d + ", " + e + "]!");
							return l ? p >>> 0 : p | 0
						},
						argPackAdvance: 8,
						readValueFromPointer: yc(b, h, 0 !== d),
						Pa: null
					})
				},
				f: function (a, b, c) {
					function d(g) {
						g >>= 2;
						var h = I;
						return new e(G, h[g + 1], h[g])
					}
					var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
					c = T(c);
					S(a, {
						name: c,
						fromWireType: d,
						argPackAdvance: 8,
						readValueFromPointer: d
					}, {
						ub: !0
					})
				},
				u: function (a, b) {
					b = T(b);
					var c = "std::string" === b;
					S(a, {
						name: b,
						fromWireType: function (d) {
							var e = I[d >> 2];
							if (c)
								for (var g = d + 4, h = 0; h <= e; ++h) {
									var k = d + 4 + h;
									if (h == e || 0 == C[k]) {
										g = g ? B(C, g, k - g) : "";
										if (void 0 === l) var l = g;
										else l += String.fromCharCode(0), l += g;
										g = k + 1
									}
								} else {
									l = Array(e);
									for (h = 0; h < e; ++h) l[h] = String.fromCharCode(C[d + 4 + h]);
									l = l.join("")
								}
							W(d);
							return l
						},
						toWireType: function (d, e) {
							e instanceof ArrayBuffer && (e = new Uint8Array(e));
							var g = "string" === typeof e;
							g || e instanceof Uint8Array || e instanceof
							Uint8ClampedArray || e instanceof Int8Array || U("Cannot pass non-string to std::string");
							var h = (c && g ? function () {
									return ta(e)
								} : function () {
									return e.length
								})(),
								k = pb(4 + h + 1);
							I[k >> 2] = h;
							if (c && g) sa(e, C, k + 4, h + 1);
							else if (g)
								for (g = 0; g < h; ++g) {
									var l = e.charCodeAt(g);
									255 < l && (W(k), U("String has UTF-16 code units that do not fit in 8 bits"));
									C[k + 4 + g] = l
								} else
									for (g = 0; g < h; ++g) C[k + 4 + g] = e[g];
							null !== d && d.push(W, k);
							return k
						},
						argPackAdvance: 8,
						readValueFromPointer: Zb,
						Pa: function (d) {
							W(d)
						}
					})
				},
				n: function (a, b, c) {
					c = T(c);
					if (2 === b) {
						var d =
							va;
						var e = xa;
						var g = ya;
						var h = function () {
							return wa
						};
						var k = 1
					} else 4 === b && (d = za, e = Aa, g = Ba, h = function () {
						return I
					}, k = 2);
					S(a, {
						name: c,
						fromWireType: function (l) {
							for (var n = I[l >> 2], p = h(), t, v = l + 4, w = 0; w <= n; ++w) {
								var q = l + 4 + w * b;
								if (w == n || 0 == p[q >> k]) v = d(v, q - v), void 0 === t ? t = v : (t += String.fromCharCode(0), t += v), v = q + b
							}
							W(l);
							return t
						},
						toWireType: function (l, n) {
							"string" !== typeof n && U("Cannot pass non-string to C++ string type " + c);
							var p = g(n),
								t = pb(4 + p + b);
							I[t >> 2] = p >> k;
							e(n, t + 4, p + b);
							null !== l && l.push(W, t);
							return t
						},
						argPackAdvance: 8,
						readValueFromPointer: Zb,
						Pa: function (l) {
							W(l)
						}
					})
				},
				G: function (a, b, c, d, e, g) {
					Xb[a] = {
						name: T(b),
						yb: tc(c, d),
						zb: tc(e, g),
						gb: []
					}
				},
				z: function (a, b, c, d, e, g, h, k, l, n) {
					Xb[a].gb.push({
						pb: T(b),
						tb: c,
						rb: tc(d, e),
						sb: g,
						Db: h,
						Cb: tc(k, l),
						Eb: n
					})
				},
				O: function (a, b) {
					b = T(b);
					S(a, {
						Jb: !0,
						name: b,
						argPackAdvance: 0,
						fromWireType: function () {},
						toWireType: function () {}
					})
				},
				t: lc,
				S: function (a) {
					if (0 === a) return mc(Ac());
					var b = zc[a];
					a = void 0 === b ? T(a) : b;
					return mc(Ac()[a])
				},
				x: function (a) {
					4 < a && (V[a].bb += 1)
				},
				H: function (a, b, c, d) {
					a || U("Cannot use deleted val. handle = " +
						a);
					a = V[a].value;
					var e = Cc[b];
					if (!e) {
						e = "";
						for (var g = 0; g < b; ++g) e += (0 !== g ? ", " : "") + "arg" + g;
						var h = "return function emval_allocator_" + b + "(constructor, argTypes, args) {\n";
						for (g = 0; g < b; ++g) h += "var argType" + g + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + g + '], "parameter ' + g + '");\nvar arg' + g + " = argType" + g + ".readValueFromPointer(args);\nargs += argType" + g + "['argPackAdvance'];\n";
						e = (new Function("requireRegisteredType", "Module", "__emval_register", h + ("var obj = new constructor(" + e + ");\nreturn __emval_register(obj);\n}\n")))(Bc,
							f, mc);
						Cc[b] = e
					}
					return e(a, c, d)
				},
				v: function () {
					x()
				},
				P: function () {
					z("missing function: aom_codec_av1_dx");
					x(-1)
				},
				d: function (a, b) {
					X(a, b || 1);
					throw "longjmp";
				},
				I: function (a, b, c) {
					C.copyWithin(a, b, b + c)
				},
				j: function (a) {
					a >>>= 0;
					var b = C.length;
					if (2147483648 < a) return !1;
					for (var c = 1; 4 >= c; c *= 2) {
						var d = b * (1 + .2 / c);
						d = Math.min(d, a + 100663296);
						d = Math.max(16777216, a, d);
						0 < d % 65536 && (d += 65536 - d % 65536);
						a: {
							try {
								A.grow(Math.min(2147483648, d) - G.byteLength + 65535 >>> 16);
								Ea(A.buffer);
								var e = 1;
								break a
							} catch (g) {}
							e = void 0
						}
						if (e) return !0
					}
					return !1
				},
				r: function (a) {
					try {
						var b = Wb(a);
						if (null === b.fd) throw new L(8);
						b.Za && (b.Za = null);
						try {
							b.Ka.close && b.Ka.close(b)
						} catch (c) {
							throw c;
						} finally {
							sb[b.fd] = null
						}
						b.fd = null;
						return 0
					} catch (c) {
						return "undefined" !== typeof Q && c instanceof L || x(c), c.Sa
					}
				},
				J: function (a, b, c, d) {
					try {
						a: {
							for (var e = Wb(a), g = a = 0; g < c; g++) {
								var h = F[b + (8 * g + 4) >> 2],
									k = e,
									l = F[b + 8 * g >> 2],
									n = h,
									p = void 0,
									t = H;
								if (0 > n || 0 > p) throw new L(28);
								if (null === k.fd) throw new L(8);
								if (1 === (k.flags & 2097155)) throw new L(8);
								if (16384 === (k.node.mode & 61440)) throw new L(31);
								if (!k.Ka.read) throw new L(28);
								var v = "undefined" !== typeof p;
								if (!v) p = k.position;
								else if (!k.seekable) throw new L(70);
								var w = k.Ka.read(k, t, l, n, p);
								v || (k.position += w);
								var q = w;
								if (0 > q) {
									var D = -1;
									break a
								}
								a += q;
								if (q < h) break
							}
							D = a
						}
						F[d >> 2] = D;
						return 0
					}
					catch (y) {
						return "undefined" !== typeof Q && y instanceof L || x(y), y.Sa
					}
				},
				E: function (a, b, c, d, e) {
					try {
						var g = Wb(a);
						a = 4294967296 * c + (b >>> 0);
						if (-9007199254740992 >= a || 9007199254740992 <= a) return -61;
						Ob(g, a, d);
						Ya = [g.position >>> 0, (Xa = g.position, 1 <= +Ma(Xa) ? 0 < Xa ? (Pa(+Oa(Xa / 4294967296), 4294967295) | 0) >>> 0 : ~~+Na((Xa - +(~~Xa >>>
							0)) / 4294967296) >>> 0 : 0)];
						F[e >> 2] = Ya[0];
						F[e + 4 >> 2] = Ya[1];
						g.Za && 0 === a && 0 === d && (g.Za = null);
						return 0
					} catch (h) {
						return "undefined" !== typeof Q && h instanceof L || x(h), h.Sa
					}
				},
				q: function (a, b, c, d) {
					try {
						a: {
							for (var e = Wb(a), g = a = 0; g < c; g++) {
								var h = e,
									k = F[b + 8 * g >> 2],
									l = F[b + (8 * g + 4) >> 2],
									n = void 0,
									p = H;
								if (0 > l || 0 > n) throw new L(28);
								if (null === h.fd) throw new L(8);
								if (0 === (h.flags & 2097155)) throw new L(8);
								if (16384 === (h.node.mode & 61440)) throw new L(31);
								if (!h.Ka.write) throw new L(28);
								h.seekable && h.flags & 1024 && Ob(h, 0, 2);
								var t = "undefined" !==
									typeof n;
								if (!t) n = h.position;
								else if (!h.seekable) throw new L(70);
								var v = h.Ka.write(h, p, k, l, n, void 0);
								t || (h.position += v);
								try {
									if (h.path && wb.onWriteToFile) wb.onWriteToFile(h.path)
								} catch (D) {
									z("FS.trackingDelegate['onWriteToFile']('" + h.path + "') threw an exception: " + D.message)
								}
								var w = v;
								if (0 > w) {
									var q = -1;
									break a
								}
								a += w
							}
							q = a
						}
						F[d >> 2] = q;
						return 0
					}
					catch (D) {
						return "undefined" !== typeof Q && D instanceof L || x(D), D.Sa
					}
				},
				b: function () {
					return ma | 0
				},
				k: Gc,
				e: Hc,
				o: Ic,
				F: Jc,
				C: Kc,
				B: Lc,
				D: Mc,
				m: Nc,
				l: Oc,
				c: Pc,
				memory: A,
				g: function (a) {
					a = +a;
					return 0 <= a ? +Oa(a + .5) : +Na(a - .5)
				},
				h: function (a) {
					a = +a;
					return 0 <= a ? +Oa(a + .5) : +Na(a - .5)
				},
				a: function (a) {
					ma = a | 0
				},
				table: oa,
				Q: function (a) {
					var b = Date.now() / 1E3 | 0;
					a && (F[a >> 2] = b);
					return b
				}
			};
			(function () {
				function a(e) {
					f.asm = e.exports;
					J--;
					f.monitorRunDependencies && f.monitorRunDependencies(J);
					0 == J && (null !== Qa && (clearInterval(Qa), Qa = null), Ra && (e = Ra, Ra = null, e()))
				}

				function b(e) {
					a(e.instance)
				}

				function c(e) {
					return Wa().then(function (g) {
						return WebAssembly.instantiate(g, d)
					}).then(e, function (g) {
						z("failed to asynchronously prepare wasm: " + g);
						x(g)
					})
				}
				var d = {
					a: Qc
				};
				J++;
				f.monitorRunDependencies && f.monitorRunDependencies(J);
				if (f.instantiateWasm) try {
					return f.instantiateWasm(d, a)
				} catch (e) {
					return z("Module.instantiateWasm callback failed with error: " +
						e), !1
				}(function () {
					if (na || "function" !== typeof WebAssembly.instantiateStreaming || Ta() || Sa("file://") || "function" !== typeof fetch) return c(b);
					fetch(K, {
						credentials: "same-origin"
					}).then(function (e) {
						return WebAssembly.instantiateStreaming(e, d).then(b, function (g) {
							z("wasm streaming compile failed: " + g);
							z("falling back to ArrayBuffer instantiation");
							return c(b)
						})
					})
				})();
				return {}
			})();
			var Za = f.___wasm_call_ctors = function () {
					return (Za = f.___wasm_call_ctors = f.asm.U).apply(null, arguments)
				},
				pb = f._malloc = function () {
					return (pb = f._malloc = f.asm.V).apply(null, arguments)
				},
				W = f._free = function () {
					return (W = f._free = f.asm.W).apply(null, arguments)
				},
				wc = f.___getTypeName = function () {
					return (wc = f.___getTypeName = f.asm.X).apply(null, arguments)
				};
			f.___embind_register_native_and_builtin_types = function () {
				return (f.___embind_register_native_and_builtin_types = f.asm.Y).apply(null, arguments)
			};
			var Fc = f.___errno_location = function () {
					return (Fc = f.___errno_location = f.asm.Z).apply(null, arguments)
				},
				X = f._setThrew = function () {
					return (X = f._setThrew = f.asm._).apply(null, arguments)
				},
				Y = f.stackSave = function () {
					return (Y = f.stackSave = f.asm.$).apply(null, arguments)
				},
				Z = f.stackRestore = function () {
					return (Z = f.stackRestore = f.asm.aa).apply(null, arguments)
				},
				Rc = f.dynCall_vi = function () {
					return (Rc = f.dynCall_vi = f.asm.ba).apply(null, arguments)
				},
				Sc = f.dynCall_vii = function () {
					return (Sc = f.dynCall_vii = f.asm.ca).apply(null, arguments)
				};
			f.dynCall_viii = function () {
				return (f.dynCall_viii = f.asm.da).apply(null, arguments)
			};
			var Tc = f.dynCall_viiii = function () {
					return (Tc = f.dynCall_viiii = f.asm.ea).apply(null, arguments)
				},
				Uc = f.dynCall_ii = function () {
					return (Uc = f.dynCall_ii = f.asm.fa).apply(null, arguments)
				},
				Vc = f.dynCall_iii = function () {
					return (Vc = f.dynCall_iii = f.asm.ga).apply(null, arguments)
				};
			f.dynCall_iiii = function () {
				return (f.dynCall_iiii = f.asm.ha).apply(null, arguments)
			};
			f.dynCall_iiiii = function () {
				return (f.dynCall_iiiii = f.asm.ia).apply(null, arguments)
			};
			var Wc = f.dynCall_iiiiiiiii = function () {
					return (Wc = f.dynCall_iiiiiiiii = f.asm.ja).apply(null, arguments)
				},
				Xc = f.dynCall_iiiiiiiiii = function () {
					return (Xc = f.dynCall_iiiiiiiiii = f.asm.ka).apply(null, arguments)
				},
				Yc = f.dynCall_iiiijj = function () {
					return (Yc = f.dynCall_iiiijj = f.asm.la).apply(null, arguments)
				},
				Zc = f.dynCall_ij = function () {
					return (Zc = f.dynCall_ij = f.asm.ma).apply(null, arguments)
				},
				$c = f.dynCall_jjij = function () {
					return ($c = f.dynCall_jjij = f.asm.na).apply(null, arguments)
				};
			f.dynCall_i = function () {
				return (f.dynCall_i = f.asm.oa).apply(null, arguments)
			};
			f.dynCall_iiiiii = function () {
				return (f.dynCall_iiiiii = f.asm.pa).apply(null, arguments)
			};
			f.dynCall_viiiii = function () {
				return (f.dynCall_viiiii = f.asm.qa).apply(null, arguments)
			};
			f.dynCall_viiiiii = function () {
				return (f.dynCall_viiiiii = f.asm.ra).apply(null, arguments)
			};
			f.dynCall_viiiiiiii = function () {
				return (f.dynCall_viiiiiiii = f.asm.sa).apply(null, arguments)
			};
			f.dynCall_viiiiiii = function () {
				return (f.dynCall_viiiiiii = f.asm.ta).apply(null, arguments)
			};
			f.dynCall_viiiiiiiiiii = function () {
				return (f.dynCall_viiiiiiiiiii = f.asm.ua).apply(null, arguments)
			};
			f.dynCall_jiiiiiiiii = function () {
				return (f.dynCall_jiiiiiiiii = f.asm.va).apply(null, arguments)
			};
			f.dynCall_iiiiiiii = function () {
				return (f.dynCall_iiiiiiii = f.asm.wa).apply(null, arguments)
			};
			f.dynCall_iiiiiii = function () {
				return (f.dynCall_iiiiiii = f.asm.xa).apply(null, arguments)
			};
			f.dynCall_iiiiiiiiiiii = function () {
				return (f.dynCall_iiiiiiiiiiii = f.asm.ya).apply(null, arguments)
			};
			f.dynCall_iidiiii = function () {
				return (f.dynCall_iidiiii = f.asm.za).apply(null, arguments)
			};
			f.dynCall_jiji = function () {
				return (f.dynCall_jiji = f.asm.Aa).apply(null, arguments)
			};
			f.dynCall_viiiiiiiiii = function () {
				return (f.dynCall_viiiiiiiiii = f.asm.Ba).apply(null, arguments)
			};
			f.dynCall_viiiiiiiiiiiii = function () {
				return (f.dynCall_viiiiiiiiiiiii = f.asm.Ca).apply(null, arguments)
			};
			f.dynCall_jiiiiiiii = function () {
				return (f.dynCall_jiiiiiiii = f.asm.Da).apply(null, arguments)
			};
			f.dynCall_ff = function () {
				return (f.dynCall_ff = f.asm.Ea).apply(null, arguments)
			};
			f.dynCall_jiiiiii = function () {
				return (f.dynCall_jiiiiii = f.asm.Fa).apply(null, arguments)
			};
			f.dynCall_jiiiii = function () {
				return (f.dynCall_jiiiii = f.asm.Ga).apply(null, arguments)
			};
			f.dynCall_iiijii = function () {
				return (f.dynCall_iiijii = f.asm.Ha).apply(null, arguments)
			};

			function Hc(a, b, c) {
				var d = Y();
				try {
					return Vc(a, b, c)
				} catch (e) {
					Z(d);
					if (e !== e + 0 && "longjmp" !== e) throw e;
					X(1, 0)
				}
			}

			function Nc(a, b) {
				var c = Y();
				try {
					Rc(a, b)
				} catch (d) {
					Z(c);
					if (d !== d + 0 && "longjmp" !== d) throw d;
					X(1, 0)
				}
			}

			function Pc(a, b, c, d, e) {
				var g = Y();
				try {
					Tc(a, b, c, d, e)
				} catch (h) {
					Z(g);
					if (h !== h + 0 && "longjmp" !== h) throw h;
					X(1, 0)
				}
			}

			function Oc(a, b, c) {
				var d = Y();
				try {
					Sc(a, b, c)
				} catch (e) {
					Z(d);
					if (e !== e + 0 && "longjmp" !== e) throw e;
					X(1, 0)
				}
			}

			function Gc(a, b) {
				var c = Y();
				try {
					return Uc(a, b)
				} catch (d) {
					Z(c);
					if (d !== d + 0 && "longjmp" !== d) throw d;
					X(1, 0)
				}
			}

			function Jc(a, b, c, d, e, g, h, k, l, n) {
				var p = Y();
				try {
					return Xc(a, b, c, d, e, g, h, k, l, n)
				} catch (t) {
					Z(p);
					if (t !== t + 0 && "longjmp" !== t) throw t;
					X(1, 0)
				}
			}

			function Ic(a, b, c, d, e, g, h, k, l) {
				var n = Y();
				try {
					return Wc(a, b, c, d, e, g, h, k, l)
				} catch (p) {
					Z(n);
					if (p !== p + 0 && "longjmp" !== p) throw p;
					X(1, 0)
				}
			}

			function Mc(a, b, c, d, e, g) {
				var h = Y();
				try {
					return $c(a, b, c, d, e, g)
				} catch (k) {
					Z(h);
					if (k !== k + 0 && "longjmp" !== k) throw k;
					X(1, 0)
				}
			}

			function Kc(a, b, c, d, e, g, h, k) {
				var l = Y();
				try {
					return Yc(a, b, c, d, e, g, h, k)
				} catch (n) {
					Z(l);
					if (n !== n + 0 && "longjmp" !== n) throw n;
					X(1, 0)
				}
			}

			function Lc(a, b, c) {
				var d = Y();
				try {
					return Zc(a, b, c)
				} catch (e) {
					Z(d);
					if (e !== e + 0 && "longjmp" !== e) throw e;
					X(1, 0)
				}
			}
			var ad;
			Ra = function bd() {
				ad || cd();
				ad || (Ra = bd)
			};

			function cd() {
				function a() {
					if (!ad && (ad = !0, f.calledRun = !0, !pa)) {
						f.noFSInit || Qb || (Qb = !0, Pb(), f.stdin = f.stdin, f.stdout = f.stdout, f.stderr = f.stderr, f.stdin ? Sb("stdin", f.stdin) : Lb("/dev/tty", "/dev/stdin"), f.stdout ? Sb("stdout", null, f.stdout) : Lb("/dev/tty", "/dev/stdout"), f.stderr ? Sb("stderr", null, f.stderr) : Lb("/dev/tty1", "/dev/stderr"), Mb("/dev/stdin", "r"), Mb("/dev/stdout", "w"), Mb("/dev/stderr", "w"));
						Ga(Ia);
						vb = !1;
						Ga(Ja);
						aa(f);
						if (f.onRuntimeInitialized) f.onRuntimeInitialized();
						if (f.postRun)
							for ("function" ==
								typeof f.postRun && (f.postRun = [f.postRun]); f.postRun.length;) {
								var b = f.postRun.shift();
								Ka.unshift(b)
							}
						Ga(Ka)
					}
				}
				if (!(0 < J)) {
					if (f.preRun)
						for ("function" == typeof f.preRun && (f.preRun = [f.preRun]); f.preRun.length;) La();
					Ga(Ha);
					0 < J || (f.setStatus ? (f.setStatus("Running..."), setTimeout(function () {
						setTimeout(function () {
							f.setStatus("")
						}, 1);
						a()
					}, 1)) : a())
				}
			}
			f.run = cd;
			if (f.preInit)
				for ("function" == typeof f.preInit && (f.preInit = [f.preInit]); 0 < f.preInit.length;) f.preInit.pop()();
			noExitRuntime = !0;
			cd();


			return avif_enc.ready
		}
	);
})();
if (typeof exports === 'object' && typeof module === 'object')
	module.exports = avif_enc;
else if (typeof define === 'function' && define['amd'])
	define([], function () {
		return avif_enc;
	});
else if (typeof exports === 'object')
	exports["avif_enc"] = avif_enc;



onmessage = function (e) {
	avif_enc().then(wasm => {
		let img = wasm.encode(
			e.data.data.data,
			e.data.data.width,
			e.data.data.height, {
				// quality: ((e.data.quality-0)*100)*0.9,

				minQuantizer: 63 * ((1 - e.data.quality) - 0),
				maxQuantizer: 63,
				minQuantizerAlpha: 63 * ((1 - e.data.quality) - 0),
				maxQuantizerAlpha: 63,
				tileColsLog2: 0,
				tileRowsLog2: 0,
				speed: 8,
				subsample: 1
			}
		);
		let outImgBlob = new Blob([img.buffer], {
			type: "image/avif"
		});
		postMessage(outImgBlob);
	});
}