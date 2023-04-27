//
//  ContentView.swift
//  shareit
//
//  Created by jaideep singh on 25/04/23.
//

//import SwiftUI
//
//struct ContentView: View {
//    var body: some View {
//        VStack {
//            Image(systemName: "globe")
//                .imageScale(.large)
//                .foregroundColor(.accentColor)
//            Text("Hello, world!")
//        }
//        .padding()
//    }
//}
//
//struct ContentView_Previews: PreviewProvider {
//    static var previews: some View {
//        ContentView()
//    }
//}
import SwiftUI

struct ContentView: View {
    @State var data = "Loading..."

    var body: some View {
        VStack {
            Text(data)
                .padding()
            Button("Fetch Data") {
                fetchData()
            }
        }
    }

    func fetchData() {
        // Create a URL object for the local API endpoint
        guard let url = URL(string: "https://restcountries.com/v3.1/name/eesti") else {
            return
        }

        // Create a URL session and data task
        let session = URLSession.shared
        let task = session.dataTask(with: url) { data, response, error in
            // Handle errors
            guard let data = data, error == nil else {
                self.data = "Error fetching data"
                return
            }

            // Convert data to string and update the UI
            if let str = String(data: data, encoding: .utf8) {
                self.data = str
            }
        }

        // Start the data task
        task.resume()
    }
}
