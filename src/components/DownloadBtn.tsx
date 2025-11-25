"use client";
import { downloadResume } from "@/lib/utils";
import { Download } from "lucide-react";

function downloadBtn() {
	return (
		<div
			className="flex flex-col items-center justify-center space-y-4 text-center cursor-pointer hover:opacity-80 transition-opacity "
			onClick={() => downloadResume()}>
			<div className="space-y-2 ">
				<div className="inline-block rounded-lg bg-primary text-background px-3 py-1 text-sm">
					Resume <Download className="inline-block h-4 w-4 ml-1" />
				</div>
			</div>
		</div>
	);
}

export default downloadBtn;
