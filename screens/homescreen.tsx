import Icon from "@/assets/icons/Icon";
import Dropdown from "@/components/Dropdown";
import { Box, Image, Text } from "@/components/Restyle";
import Pressable from "@/components/Restyle/Pressable";
import theme from "@/constants/colors";
import {
  diseases,
  nearbyDoctors,
  specialities,
  specialties,
  states,
} from "@/constants/mockData";
import React, { useRef } from "react";
import { ScrollView, TextInput, TextStyle } from "react-native";

const HomePage = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [selectedDisease, setSelectedDisease] = React.useState({ name: "" });
  const [selectedSpecialties, setSelectedSpecialties] = React.useState({
    name: "",
  });
  const [selectedState, setSelectedState] = React.useState({ name: "" });
  const [search, setSearch] = React.useState("");

  return (
    <Box height="100%" backgroundColor="white">
      <Box height={36} />
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px="md"
        py="sm"
        bg="white"
      >
        <Box flex={1} flexDirection="row" alignItems="center" gap="sm">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
            }}
            width={40}
            height={40}
            borderRadius={20}
          />
          <Box>
            <Text variant="medium16" color="black">
              Hello,{" "}
              <Text variant="medium16" color="black">
                Ryan Blake
              </Text>
            </Text>
          </Box>
        </Box>
        <Pressable padding="sm">
          <Icon size={24} name="bell" />
        </Pressable>
      </Box>

      {/* Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box px="sm" pb="md">
          <Pressable
            flex={1}
            flexDirection="row"
            alignItems="center"
            borderRadius={6}
            padding="xs"
            shadowOpacity={0.05}
            borderWidth={0.5}
            marginBottom="sm"
          >
            <Icon size={20} name="search" />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Find the right doctor for you"
              style={{
                ...(theme.textVariants.regular12 as TextStyle),
                fontSize: 16,
                marginLeft: 10,
              }}
            />
          </Pressable>

          {/* Appointment Section */}
          <Box mb="md">
            <Box
              backgroundColor="primary"
              borderRadius={10}
              padding="sm"
              position="relative"
              overflow="hidden"
            >
              <Box
                flex={1}
                flexDirection="row"
                alignItems="center"
                marginBottom="sm"
              >
                <Text variant="regular14" color="white">
                  {new Date().toDateString()}
                </Text>
              </Box>
              <Box
                flex={1}
                flexDirection="row"
                alignItems="center"
                gap="sm"
                marginBottom="md"
              >
                {/* <Clock size={16} color="white" /> */}
                <Text variant="medium16" color="white">
                  09:00 - 10:00 AM
                </Text>
              </Box>

              <Box
                bg="white"
                borderRadius={8}
                flex={1}
                flexDirection="row"
                paddingHorizontal="xs"
                alignItems="center"
                gap="sm"
              >
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
                  }}
                  resizeMode="contain"
                  width={32}
                  height={32}
                  borderRadius={24}
                />
                <Box flex={1}>
                  <Text variant="medium16" color="black">
                    Dr. Alex Ben
                  </Text>
                  <Text variant="medium14" color="textTint">
                    General Specialist
                  </Text>
                </Box>
                <Pressable p="sm">
                  <Icon size={20} name="chat" color="black" />
                </Pressable>
              </Box>

              <Pressable
                position="absolute"
                top={20}
                right={20}
                backgroundColor="white"
                padding="sm"
                borderRadius={5}
              >
                <Icon size={18} name="send" color="white" />
              </Pressable>
            </Box>
          </Box>
          <Box marginBottom="lg">
            <Box
              flex={1}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="sm"
            >
              <Text variant="medium16" color="black">
                Doctor Specialty
              </Text>
              <Pressable>
                <Text variant="medium16" color="black" fontWeight="500">
                  See All
                </Text>
              </Pressable>
            </Box>

            <Box
              flex={1}
              flexDirection="row"
              justifyContent="space-between"
              gap="sm"
            >
              {specialties.map((specialty, index) => (
                <Pressable
                  key={index}
                  flex={1}
                  flexDirection="column"
                  alignItems="center"
                  gap="sm"
                >
                  <Box
                    width={56}
                    height={56}
                    backgroundColor="grey"
                    borderRadius={7}
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text fontSize={24}>{specialty.icon}</Text>
                  </Box>
                  <Text variant="medium14" color="black" textAlign="center">
                    {specialty.name}
                  </Text>
                </Pressable>
              ))}
            </Box>
          </Box>

          {/* <Box
            padding="sm"
            borderWidth={1}
            borderColor="greyBorder"
            borderRadius={10}
          >
            <Pressable onPress={() => {}}>
              <Text color="textTint">
                {selectedOptions.selectedDisease || "Select Option"}
              </Text>
            </Pressable>
          </Box> */}

          <Box
            padding="md"
            marginVertical="md"
            borderWidth={0.5}
            borderColor="textTint"
            borderRadius={6}
          >
            <Dropdown
              data={diseases}
              label="Diseases"
              selectedItem={selectedDisease.name}
              setSelectedItem={setSelectedDisease}
              placeHolderText={selectedDisease.name}
            />
            <Box height={10} />
            <Dropdown
              data={specialities}
              label="Specialities"
              selectedItem={selectedSpecialties.name}
              setSelectedItem={setSelectedSpecialties}
              placeHolderText={selectedSpecialties.name}
            />
            <Box height={10} />
            <Dropdown
              data={states}
              label="State"
              selectedItem={selectedState.name}
              setSelectedItem={setSelectedState}
              placeHolderText={selectedState.name}
            />

            <Pressable
              backgroundColor="primary"
              padding="md"
              marginTop="sm"
              borderRadius={8}
              onPress={() => {}}
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white">Search</Text>
            </Pressable>
          </Box>

          <Box mb="sm">
            <Box
              flex={1}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              mb="sm"
            >
              <Text variant="medium16" color="black">
                Doctors Near you
              </Text>
              <Pressable>
                <Text variant="medium16" color="black" fontWeight="500">
                  See All
                </Text>
              </Pressable>
            </Box>

            <Box gap="sm">
              {nearbyDoctors.map((doctor) => (
                <Box
                  key={doctor.id}
                  bg="white"
                  borderRadius={10}
                  padding="sm"
                  borderWidth={1}
                  borderColor="grey"
                  flex={1}
                  flexDirection="row"
                  alignItems="center"
                  gap="sm"
                  shadowOpacity={0.05}
                >
                  <Image
                    source={{ uri: doctor.image }}
                    width={56}
                    height={56}
                    borderRadius={28}
                  />
                  <Box flex={1}>
                    <Text variant="medium16" color="primary">
                      {doctor.name}
                    </Text>
                    <Text variant="medium14" color="textTint">
                      {doctor.specialty} - {doctor.location}
                    </Text>
                    <Box
                      flex={1}
                      flexDirection="row"
                      alignItems="center"
                      gap="sm"
                      mt="sm"
                    >
                      <Text variant="medium14" color="primary">
                        ⭐ {doctor.rating}
                      </Text>
                      <Text variant="medium14" color="primary">
                        {doctor.experience}
                      </Text>
                    </Box>
                  </Box>
                  <Pressable p="sm">
                    <Text>❤️</Text>
                  </Pressable>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HomePage;
