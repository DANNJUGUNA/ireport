# -*- encoding: utf-8 -*-
# stub: case_transform 0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "case_transform".freeze
  s.version = "0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["L. Preston Sego III".freeze, "Ben Mills".freeze]
  s.date = "2016-09-22"
  s.description = "Extraction of the key_transform abilities of ActiveModelSerializers".freeze
  s.email = "LPSego3+dev@gmail.com".freeze
  s.homepage = "https://github.com/NullVoxPopuli/case_transform".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0".freeze)
  s.rubygems_version = "3.4.10".freeze
  s.summary = "CaseTransform-0.2".freeze

  s.installed_by_version = "3.4.10" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<activesupport>.freeze, [">= 0"])
  s.add_development_dependency(%q<rake>.freeze, [">= 0"])
  s.add_development_dependency(%q<rubocop>.freeze, [">= 0"])
  s.add_development_dependency(%q<codeclimate-test-reporter>.freeze, [">= 0"])
  s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
  s.add_development_dependency(%q<awesome_print>.freeze, [">= 0"])
  s.add_development_dependency(%q<pry-byebug>.freeze, [">= 0"])
end
