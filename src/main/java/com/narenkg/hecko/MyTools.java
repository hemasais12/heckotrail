package com.narenkg.hecko;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;

public class MyTools {
	public static void main(String[] args) {

		MyTools myTools = new MyTools();
		myTools.downloadCountriesFlagImages();

	}

	public void downloadCountriesFlagImages() {
		String fileName = "C:\\Users\\254395\\OneDrive - Cognizant\\Desktop\\countries.txt";

		// read file into stream, try-with-resources
		try (Stream<String> stream = Files.lines(Paths.get(fileName))) {

			stream.forEach(strURL -> {
				int lastIndexOfSlash = strURL.lastIndexOf("/");
				int lastIndexOfDot = strURL.lastIndexOf(".");
				String countryCode = strURL.substring(lastIndexOfSlash + 1, lastIndexOfDot);
				downloadFile(strURL, "C:\\temp\\countryflags\\", countryCode + ".svg");
			});

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void downloadFile(String strURL, String folder, String outputFileName) {

		try {
			URL url = new URL(strURL);
			InputStream in = url.openStream();
			ReadableByteChannel rbc = Channels.newChannel(in);
			FileOutputStream fos = new FileOutputStream(folder + outputFileName);
			fos.getChannel().transferFrom(rbc, 0, Long.MAX_VALUE);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
