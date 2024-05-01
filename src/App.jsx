const App = () => {
	return (
		<main className="max-w-[640px] mx-auto bg-white py-5 px-8">
			<h1 className="text-slate-800 border-b pb-6 border-slate-300 text-3xl font-bold text-center mt-4">Daftar Menu</h1>
			<section className="mt-8">
				<ul className="list-decimal ml-4 flex flex-col gap-4">
					<div>
						<li className="font-semibold text-slate-700 text-xl">Pop Ice Boba</li>
						<ul className="list-disc mt-1 ml-5">
							<div className="flex items-center justify-between">
								<li>Ukuran Kecil</li>
								<span className="font-bold text-xl">
									<small className="font-normal">Rp.</small> 6000
								</span>
							</div>
							<div className="flex items-center justify-between">
								<li>Ukuran Besar</li>
								<span className="font-bold text-xl">
									<small className="font-normal">Rp.</small> 8000
								</span>
							</div>
						</ul>
					</div>
					<div>
						<li className="font-semibold text-slate-700 text-xl">Ice Teh Manis</li>
						<ul className="list-disc mt-1 ml-5">
							<div className="flex items-center justify-between">
								<li>Ukuran Kecil</li>
								<span className="font-bold text-xl">
									<small className="font-normal">Rp.</small> 3000
								</span>
							</div>
							<div className="flex items-center justify-between">
								<li>Ukuran Besar</li>
								<span className="font-bold text-xl">
									<small className="font-normal">Rp.</small> 4000
								</span>
							</div>
						</ul>
					</div>
					<div>
						<li className="font-semibold text-slate-700 text-xl">Cireng</li>
						<ul className="list-disc mt-1 ml-5">
							<div className="flex items-center justify-between">
								<li>Ayam Suwir Pedas</li>
								<span className="font-bold text-xl">
									<small className="font-normal">Rp.</small> 2500
								</span>
							</div>
							<div className="flex items-center justify-between">
								<li>Sosis Original</li>
								<span className="font-bold text-xl">
									<small className="font-normal">Rp.</small> 2500
								</span>
							</div>
							<div className="flex items-center justify-between">
								<li>Kornet Pedas</li>
								<span className="font-bold text-xl">
									<small className="font-normal ">Rp.</small> 2500
								</span>
							</div>
						</ul>
					</div>
				</ul>

				<div className="mt-10 border-t border-slate-300 pt-6 flex gap-x-2 flex-wrap">
					<p>Pesan secara online via WhatsApp:</p>
					<a
						href="https://api.whatsapp.com/send?phone=6287875379963&text=Halo,%20saya%20mau%20pesan%20menu%20"
						className="underline text-green-600 hover:text-green-500"
					>
						0878-7537-9963
					</a>
				</div>
				<div className="text-sm text-red-600 mt-10">
					<p>Catatan:</p>
					<ul className="list-">
						<li>- Pembelian hanya via cash</li>
						<li>- Tidak menerima pengiriman ke tempat tertentu, silahkan ambil ke warung</li>
					</ul>
				</div>
			</section>
		</main>
	);
};

export default App;
