namespace :build_str do

	desc "create a static javascript translation file with each language available as a JSON object"

    task :jsonify => :environment do
      languages  = %w(en)
      langfilejs = "public/equipt_content.js"
      namespace  = "str_bndl"
      file=File.new(langfilejs,"w")
      languages.each do |lang|
        langfile=YAML::load(File.open("config/locales/#{lang}.yml"))
        file.write("window."+namespace+" = "+langfile[lang][namespace].to_json+";\n\n")
      end
      file.close
    end

end
